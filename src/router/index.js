import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/add-new-book",
    name: "AddNewBook",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "AddNewBook" */ "../views/BookStoreOperations/AddNewBook.vue"
      )
  },
  {
    path: "/book-list",
    name: "BookList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "BookList" */ "../views/BookStoreOperations/BookList"
      )
  },
  {
    path: "/get-user-form",
    name: "GetFromUser",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "GetFromUser" */ "../views/UserOperations/GetFromUser"
      )
  },
  {
    path: "/set-user",
    name: "SetToUser",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "SetToUser" */ "../views/UserOperations/SetToUser"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
