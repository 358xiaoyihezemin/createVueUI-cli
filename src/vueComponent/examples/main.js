import Vue from 'vue';
import App from './App.vue';
import ZmUI from '../packages'
Vue.use(ZmUI)
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
