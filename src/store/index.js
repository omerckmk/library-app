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
    }
  },
  actions: {
    addBook({ commit }, payload) {
      commit("addBook", payload);
    }
  },
  getters: {
    books: state => state.books
  },
  modules: {},
  plugins: [vuexLocal.plugin]
});
