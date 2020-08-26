<template>
  <div class="container py-1  ">
    <div class="card">
      <div class="row ">
        <div class="col-md-3 ">
          <img :src="book.imgUrl" alt="" class="d-block m-3 w-50 " id="aa">
        </div>
        <div class="col-md-6 px-0 ">
          <div class="card-block">
            <h3 class="card-title font-weight-bold">{{ book.name }} </h3>
            <h4 class="card-text font-italic ">{{ book.author }}</h4>
          </div>
        </div>
        <div class="col-md-3 mt-3 d-flex align-items-center justify-content-start flex-column ">
          <p class="w-50 border p-2 text-center text-light"
             :class="{'bg-success' : book.status , 'bg-danger': !book.status}">
            {{ book.status ? 'IN STORE ' : 'AT USER' }}</p>
          <button
              @click="openModal"
              id="open"
              class="w-50 btn btn-danger text-light"
              v-if="book.status">DELETE</button>
          <sweet-modal blocking hide-close-button
                       icon="warning"
                       modal-theme="light"
                       overlay-theme="light"
                       ref="modal">
            <h2 class="mb-4">Are you sure you want to delete {{ book.name }} ?</h2>
            <button @click="closeModal" class="closebtn w-25 btn btn-light mr-5">Close</button>
            <button @click="removeBook" class="deletebtn w-25 btn btn-danger">Delete</button>
          </sweet-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookListTable",
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeBook() {
      this.$store.dispatch('removeBook', this.book);
      this.$notify({
        title : `${this.book.name} DELETED`,
        type  : "success"
      });

    },
    openModal() {
      this.$refs.modal.open();
    },
    closeModal() {
      this.$refs.modal.close();
    }
  }
}
</script>

<style lang="scss">
img {
  height: 170px;
}

.title {
  margin-bottom: 50px;
  text-transform: uppercase;
}

.card-block {
  position: relative;
  margin: 0;
  padding: 1em;
  box-shadow: none;
}

</style>