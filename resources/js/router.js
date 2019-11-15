import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from "./components/HomeComponent";


Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: HomeComponent,
        },
        
        
    ],
    mode: 'history',
})