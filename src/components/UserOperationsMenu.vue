<template>
  <div class="card ">
    <div class="card-body">
      <h3 class="mt-4  ">User Store Operations</h3>
      <router-link
        to="/get-from-user"
        tag="button"
        class="btn btn-info btn-lg btn-block mt-4 font-weight-bold"
        >Get From User</router-link
      >
      <router-link
        to="/set-user"
        tag="button"
        class="btn btn-info btn-lg btn-block mt-4 font-weight-bold"
        >Set To User</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOperationsMenu.vuer"
};
</script>

<style scoped></style>
