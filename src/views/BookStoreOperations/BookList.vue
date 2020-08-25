<template>
<div class="container border mt-4 p-4 ">
  <div class="d-flex justify-content-between ">
    <h2 class="ml-3">Book List</h2>
    <router-link class="h2 mr-3" to="/">Home</router-link>
  </div>
  <BookCard
      class="book-card"
      v-for="book in books"
      :key="book.bookId"
      :book="book"/>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import BookCard from "@/components/BookCard";
export default {
name: "BookList.vue",
  components: {
    BookCard
  },
  computed: {
    ...mapGetters({
      books: "books"
    })
  }
}
</script>

<style scoped>
.book-card{

}
</style>