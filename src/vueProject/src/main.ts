import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import authPlugin from './plugins/auth';
import './plugins/api';
authPlugin({ router });
import './plugins/vconsole';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
