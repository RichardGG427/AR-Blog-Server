import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/scss/reset.scss";
import "@/assets/font/iconfont.css";
import "@/assets/scss/common.scss";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import setAxios from "./setAxios";

setAxios();
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.use(mavonEditor);

router.beforeEach((to, from, next) => {
  let token = "";
  if (token) {
    store.commit("changeIsSignIn", 1);
  }
  next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
