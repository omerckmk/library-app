<template>
  <div class="container border mt-4 p-4 ">
    <div class="d-flex justify-content-between ">
      <h2 class="ml-3">Book List</h2>
      <router-link class="h2 mr-3" to="/">Home</router-link>
    </div>
    <BookCard
        :book="book"
        :key="book.bookId"
        class="book-card"
        id=”books”
        v-for="book in bookList"/>
    <div class="container ">
      <b-pagination
          align="center"
          :per-page="perPage"
          :total-rows="books.length"
          aria-controls="books"
          next-text="Next"
          prev-text="Prev"
          v-model="currentPage"
      ></b-pagination>
  </div>

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
  data() {
    return {
      perPage: 3,
      currentPage: 1

    }
  },
  computed: {
    ...mapGetters({
      books: "books"
    }),
    bookList() {
      return this.books.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage,
      );
    }
  }
}
</script>

<style scoped>
.book-card {

}
</style>