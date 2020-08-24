<template>
  <div class="container ">
    <BookStoreMenu class="bookstore justify-content-center "/>
    <UserOperationsMenu class="useroperations justify-content-center "/>
  </div>
</template>

<script>
import '../styles/home.scss'
import BookStoreMenu from "@/components/BookStoreMenu";
import UserOperationsMenu from "@/components/UserOperationsMenu";
export default {
  name: "Home",
  components: {
    BookStoreMenu,
    UserOperationsMenu
  }
};
</script>
<style scoped>

</style>
