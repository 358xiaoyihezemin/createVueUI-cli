import Vue from 'vue';
import VConsole from 'vconsole';

Vue.use(() => {
  if (process.env.NODE_ENV === 'development') {
    const vConsole = new VConsole();
  }
});
