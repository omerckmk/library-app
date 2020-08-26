<template>
  <div class="home">
    <div class="container d-flex justify-content-center  mt-lg-5">
      <h1 class="title font-weight-bold ">Bookstore</h1>
    </div>
    <div class="container w-100 d-flex align-items-center justify-content-center mt-lg-5">
      <BookStoreMenu class="bookstore justify-content-center w-100 m-auto "/>
      <UserOperationsMenu class="useroperations justify-content-center w-100 m-auto "/>
    </div>
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
