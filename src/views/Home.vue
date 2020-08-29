<template>
  <div class="home ">
    <div class="container d-flex justify-content-center py-3  ">
      <h1 class="title font-weight-bold text-dark">Bookcase App</h1>
    </div>
    <div
        class="container menu d-flex align-items-center justify-content-center mt-4 "
    >
      <BookStoreMenu
          class="mx-5 shadow  border border-info bookstore"
      />
      <UserOperationsMenu
          class="mx-5 shadow  border border-info user"
      />


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
<style lang="scss" scoped>
@media (max-width: 767px) {
  .menu {
    flex-direction: column;
  }
  .bookstore {
    width: 100%;
  }
  .user {
    width: 100%;
    margin-top: 10px;
  }
}

</style>
