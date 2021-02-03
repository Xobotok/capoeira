import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import $ from 'expose-loader?exposes[]=$&exposes[]=jQuery!jquery';
import router from './router';
import store from './store';
import * as helper from './helper';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
