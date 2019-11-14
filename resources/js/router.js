import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from "./components/HomeComponent";
import ExampleComponent from "./components/ExampleComponent";

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: HomeComponent,
        },
        {
            path: '/example',
            component: ExampleComponent,
        },
        
    ],
    mode: 'history',
})