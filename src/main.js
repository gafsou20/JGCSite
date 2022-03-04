import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePageTransition from 'vue-page-transition';
import VueTyperPlugin from 'vue-typer';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;
Vue.use(VuePageTransition);
Vue.use(VueTyperPlugin);
Vue.use(VueAnalytics, {
    id: 'UA-305615475-1',
    router
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
