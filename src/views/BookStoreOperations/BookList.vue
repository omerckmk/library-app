<template>
  <div class="container  mt-4 p-4 mb-4 border border-primary shadow rounded book-list ">
    <div class="d-flex justify-content-between mb-3">
      <h2 class="ml-3 font-weight-bold">Book List</h2>
      <router-link class="h2 mr-3 font-weight-bold" to="/">Home</router-link>
    </div>
    <BookCard
      :book="book"
      :key="book.bookId"
      id="”books”"
      v-for="book in bookList"
    />

    <div class="container mt-3 ">
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
import { mapGetters } from "vuex";
import BookCard from "../../components/BookCard";

export default {
  name: "BookList.vue",
  components: {
    BookCard
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters({
      books: "books"
    }),
    bookList() {
      return this.books.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      );
    }
  }
};
</script>

<style scoped>
@media (max-width: 767px) {
  .book-list{
    width: 90%;
  }

}
</style>
