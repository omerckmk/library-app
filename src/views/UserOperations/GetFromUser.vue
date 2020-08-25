<template>
  <div class="container-md w-50 border mt-4 p-4 ">

    <form @submit.prevent="getFromUser">
      <div class="form-group">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3>Get From User</h3>
          <router-link class="h3" to="/">Home</router-link>
        </div>
        <select class="form-control" required v-model="selectUser">
          <option disabled hidden selected value="">Please select a book</option>
          <option :key="book.bookId" :value="book.user" v-for="book in booksGetUser">{{ book.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <div class="card w-100">
          <div class="card-body" v-if="selectUser">
            <h4 class="card-title">{{ selectUser.userId }}</h4>
            <h4 class="card-title">{{ selectUser.fullName }}</h4>
            <p class="card-text">{{ selectUser.userAdress }}</p>
          </div>
          <div class="card-body" v-else>
            <h4 class="card-title">User not found</h4>


          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="w-100 btn btn-info" type="submit">
          Get To User
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "GetFromUser.vue",
  data() {
    return {
      selectUser: ''


    }
  },
  methods: {
    getFromUser() {
      this.$store.dispatch('getFromUser' , this.selectUser);
    },
  },
  computed: {
    ...mapGetters({
      booksGetUser: "booksGetUser"
    }),
  }
}
</script>

<style scoped>

</style>