import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from "./components/HomeComponent";
import Js from "./components/jqueryDraggble";


Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: HomeComponent,
        },
        {
            path: '/test',
            component: Js,
        },
        
    ],
    mode: 'history',
})