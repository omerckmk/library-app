<template>
  <div class="container-md ">
    <ValidationObserver v-slot="{ handleSubmit}">
      <form @submit.prevent="handleSubmit(setUser)">
        <div class="form-group">
          <div class="form-group">
            <ValidationProvider mode="passive" name="as" rules="required" v-slot="{ errors }">
              <select v-model="selectBook" class="form-control" >
              </select>
              <span class="text-danger">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
          <ValidationProvider mode="passive" name="User Id" rules="required" v-slot="{ errors }">
            <input type="text" v-model="userForm.userId" class="form-control"
                   placeholder="Please insert identity number">
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider mode="passive" name="Name Surname" rules="required" v-slot="{ errors }">
            <textarea name="Description" v-model="userForm.nameSurname" class="form-control"
                      placeholder="Please enter user name and surname"></textarea>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <ValidationProvider mode="passive" name="Description" rules="required" v-slot="{ errors }">
            <textarea name="Description" v-model="userForm.userAdress" class="form-control"
                      placeholder="Please enter user address"></textarea>
            <span class="text-danger">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="form-group">
          <button class="w-100" type="submit">
            Set To User
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
name: "SetToUser.vue",
  data() {
    return {
      selectBook : '',
      userForm: {
        userId : '',
        nameSurname : '',
        userAdress : ''
      }
    }
  },
}
</script>

<style scoped>

</style>