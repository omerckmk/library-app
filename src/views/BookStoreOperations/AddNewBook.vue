<template>
  <div class="container-md border border-primary shadow rounded mt-4 p-4 addNewBook">
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(saveForm)">
        <div class="form-group">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="font-weight-bold">Add New Book</h3>
            <router-link class="h3 font-weight-bold" to="/">Home</router-link>
          </div>

          <ValidationProvider
            mode="passive"
            name="Name"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              class="form-control"
              name="name"
              placeholder="Please enter book name"
              type="text"
              v-model="bookForm.name"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider
            mode="passive"
            name="Author"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              class="form-control"
              name="author"
              placeholder="Please enter author"
              type="text"
              v-model="bookForm.author"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider
            mode="passive"
            name="İmg Url"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              class="form-control"
              name="img url"
              placeholder="Book Img Url"
              type="url"
              v-model="bookForm.imgUrl"
            />
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button
            class="btnSubmit w-100 btn btn-info font-weight-bold"
            type="submit"
          >
            SAVE
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddNewBook",
  data() {
    return {
      bookForm: {
        bookId: null,
        name: "",
        author: "",
        imgUrl: "",
        status: true
      }
    };
  },
  methods: {
    saveForm() {
      this.bookForm.bookId = uuidv4();
      this.$store.dispatch("addBook", this.bookForm);
      this.$notify({
        title: `${this.bookForm.name} ADDED`,
        type: "success"
      });
      this.clearForm();
    },
    clearForm() {
      this.bookForm = {
        bookId: null,
        name: "",
        author: "",
        imgUrl: "",
        status: true
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .addNewBook{
    width: 90%;

  }
}
@media (min-width: 768px) {
  .addNewBook{
    width: 50%;
  }
}
</style>
