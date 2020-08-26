<template>
  <div class="home ">
    <div class="container d-flex justify-content-center py-3  ">
      <h1 class="title font-weight-bold text-dark">Bookcase App</h1>
    </div>
    <div class="container d-flex align-items-center justify-content-center mt-4 ">
      <BookStoreMenu class="justify-content-center w-50 mx-5 shadow  border border-info "/>
      <UserOperationsMenu class="justify-content-center w-50 mx-5 shadow  border border-info"/>
    </div>
  </div>
</template>

<script>
import BookStoreMenu from "../components/BookStoreMenu";
import UserOperationsMenu from "../components/UserOperationsMenu";

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
