// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store.js';
import Vuex from "vuex";
import axios from 'axios';
// import Swiper from "swiper";
// import 'swiper/dist/css/swiper.min.css';
//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/dist/css/swiper.min.css';

Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
// Vue.use(Swiper);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

axios.defaults.withCredentials = true;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

