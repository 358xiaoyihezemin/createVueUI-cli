import Vue from 'vue';
import * as api from '../apis';

Vue.use(() => {
  Vue.prototype.$api = api;
});


