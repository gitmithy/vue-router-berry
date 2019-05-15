import Vue from "vue";
import ElementUI from 'element-ui';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import './plugins/button.js'
import './plugins/tab.js'
// import {A,test,Hello} from './plugins/test.js'
import './plugins/test.js'
// console.log(A);
// console.log(test);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


