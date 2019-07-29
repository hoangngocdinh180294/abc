require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from './router';
import MainApp from './components/MainApp.vue';


const router = new VueRouter({
    routes,
    // mode: 'history'
});
Vue.use(VueRouter);
const app = new Vue({
    el: '#app',
    router,
    components: {
        MainApp
    },
});