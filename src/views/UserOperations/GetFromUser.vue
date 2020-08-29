<template>
  <div
    class="container-md mt-4 p-4 border border-primary shadow rounded getFrom "
  >
    <form @submit.prevent="getFromUser">
      <div class="form-group">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="font-weight-bold">Get From User</h3>
          <router-link class="h3 font-weight-bold" to="/">Home</router-link>
        </div>
        <select class="form-control" required v-model="selectBook">
          <option disabled selected value="">Please select a book</option>
          <option
            :key="book.bookId"
            :value="book"
            v-for="book in booksGetUser"
            >{{ book.name }}</option
          >
        </select>
      </div>
      <div class="form-group">
        <div class="card w-100">
          <div class="card-body" v-if="selectBook">
            <h4 class="card-title">{{ selectBook.user.userId }}</h4>
            <h5 class="card-title">{{ selectBook.user.fullName }}</h5>
            <p class="card-text">{{ selectBook.user.userAdress }}</p>
          </div>
          <div class="card-body" v-else>
            <p class="card-text">No book selected</p>
          </div>
        </div>
      </div>
      <div class="form-group">
        <button
          class="btn btn-info btn-lg btn-block font-weight-bold"
          type="submit"
        >
          Get From User
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "GetFromUser.vue",
  data() {
    return {
      selectBook: null
    };
  },
  methods: {
    getFromUser() {
      this.$store.dispatch("getFromUser", this.selectBook);
      this.$notify({
        title: `${this.selectBook.name} has been getted from user`,
        type: "success"
      });
      this.selectBook = null;
    }
  },
  computed: {
    ...mapGetters({
      booksGetUser: "booksGetUser"
    })
  }
};
</script>

<style scoped lang="scss">
@media (max-width: 767px) {
  .getFrom{
    width: 90%;

  }
}
@media (min-width: 768px) {
  .getFrom{
    width: 50%;
  }
}
</style>
