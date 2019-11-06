import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from "./components/HomeComponent";
import Js from "./components/jqueryDraggble";
import konva from "./components/konva";


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
        {
            path: '/konva',
            component: konva,
        },
        
    ],
    mode: 'history',
})