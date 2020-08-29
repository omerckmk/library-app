<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <router-link to="/" class="navbar-brand">
      <h4 width="30" height="30" class="d-inline align-bottom text-light">
        LİBRARY
      </h4>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse ml-4" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle font-weight-bold text-light"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Book Store Operations
          </a>
          <div class="dropdown-menu " aria-labelledby="navbarDropdown">
            <router-link
              to="/add-new-book"
              class="dropdown-item font-weight-bold"
              >Add New Book</router-link
            >
            <router-link to="/book-list" class="dropdown-item font-weight-bold"
              >Book List</router-link
            >
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle font-weight-bold text-light"
            href="#"
            id="navbarDropdown1"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            User Operations
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown1">
            <router-link
              to="/get-from-user"
              class="dropdown-item font-weight-bold"
              >Get From User</router-link
            >
            <router-link to="/set-user" class="dropdown-item font-weight-bold"
              >Set to User</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavBar.vue"
};
</script>

<style scoped></style>
