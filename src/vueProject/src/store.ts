import Vue from 'vue';
import Vuex from 'vuex';
import questionVuex from './store/modules/question';
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        questionVuex,
    },
});
