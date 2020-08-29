<template>
  <div class="card bookstore">
    <div class="card-body">
      <h3 class="mt-4 message">{{ message }}</h3>
      <router-link
        to="/add-new-book"
        tag="button"
        class="btn btn-info btn-lg btn-block mt-4 font-weight-bold"
        >Add New Book</router-link
      >
      <router-link
        to="/book-list"
        tag="button"
        class="btn btn-info btn-lg btn-block mt-4 font-weight-bold"
        >Book List</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BookStoreMenu.vue",
  data() {
    return {
      message: "Book Store Operations"
    };
  }
};
</script>

<style scoped lang="scss">

</style>
