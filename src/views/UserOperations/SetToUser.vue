<template>
  <div class="container-md w-50 border mt-4 p-4 ">
    <ValidationObserver v-slot="{ handleSubmit}">
      <form @submit.prevent="handleSubmit(setUser)">
        <div class="form-group">
          <div class="form-group">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h3>Set To User</h3>
              <router-link class="h3" to="/">Home</router-link>
            </div>
            <ValidationProvider mode="passive" name="as" rules="required" v-slot="{ errors }">
              <select class="form-control" required v-model="userForm.selectBook">
                <option disabled hidden selected value="">Please select a book</option>
                <option :key="book.bookId" :value="book.bookId" v-for="book in booksSetUser">{{ book.name }}</option>
              </select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <ValidationProvider mode="passive" name="Id" rules="required" v-slot="{ errors }">
            <input class="form-control" name="Id" placeholder="Please insert identity number" type="number"
                   v-model="userForm.userId">
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider mode="passive" name="fullName" rules="required" v-slot="{ errors }">
            <input class="form-control" name="fullName" placeholder="Please enter user name and surname"
                   v-model="userForm.fullName">
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider mode="passive" name="adress" rules="required" v-slot="{ errors }">
            <textarea class="form-control" name="adress" placeholder="Please enter user address" type="text"
                      v-model="userForm.userAdress"></textarea>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button class="w-100 btn btn-info" type="submit">
            Set To User
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SetToUser.vue",
  data() {
    return {
      userForm: {
        selectBook: '',
        userId: '',
        fullName: '',
        userAdress: ''
      }
    }
  },
  methods: {
    setUser() {
      this.$store.dispatch('setToUser', this.userForm);
      this.clearForm();
    },
    clearForm() {
      this.userForm = {
        selectBook: '',
        userId: '',
        fullName: '',
        userAdress: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      booksSetUser: "booksSetUser"
    })
  }
}
</script>

<style scoped>

</style>