import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    addBook(state, payload) {
      state.books.push(payload);
    },
    removeBook(state, payload) {
      const index = state.books.findIndex(obj => obj.bookId === payload.bookId);
      if (state.books[index].status === true) {
        state.books.splice(index, 1);
      }
    },
    setToUser(state, payload) {
      const index = state.books.findIndex(
        obj => obj.bookId === payload.selectBook
      );
      state.books[index].user = payload;
      state.books[index].status = false;
    },
    getFromUser(state, payload) {
      const index = state.books.findIndex(obj => obj.user === payload);
      if (index > -1) {
        state.books[index].user = null;
        state.books[index].status = true;
      }
    }
  },
  actions: {
    addBook({ commit }, payload) {
      commit("addBook", payload);
    },
    setToUser({ commit }, payload) {
      commit("setToUser", payload);
    },
    getFromUser({ commit }, payload) {
      commit("getFromUser", payload);
    },
    removeBook({ commit }, payload) {
      commit("removeBook", payload);
    }
  },
  getters: {
    books: state => state.books,
    booksSetUser: state => state.books.filter(obj => obj.status === true),
    booksGetUser: state => state.books.filter(obj => obj.status === false)
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
