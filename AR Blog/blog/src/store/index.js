import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,
    token: "",
  },

  mutations: {
    changeIsSignIn(state, n) {
      state.isSignIn = n;
    },
  },
});
