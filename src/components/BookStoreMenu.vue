<template>
  <div class="row">
    <div class="col-lg-10">
      <div class="card ">
        <div class="card-body">
          <h3 class="mt-4">Book Store Operations</h3>
          <router-link to="/add-new-book" tag="button" class="btn btn-primary btn-lg btn-block mt-4">Add New Book</router-link>
          <router-link to="/book-list" tag="button" class="btn btn-primary btn-lg btn-block mt-4">Book List</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookStoreMenu.vue"
}
</script>

<style scoped>

</style>