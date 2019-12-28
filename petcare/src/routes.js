import Vue from 'vue'
import Router from 'vue-router'
import Homepage from "./components/Homepage.vue";
import Login from './components/auth/Login.vue';
import Events from './components/Events.vue';
import Affiliates from './components/Affiliates.vue';
import Affiliate from './components/Affiliate.vue';
import Lost from './components/Lost.vue';
import Kids from './components/Kids.vue';

Vue.use(Router)

const routes = [
    { path: '/', component: Homepage, name: "homepage" },
    { path: '/affiliates', component: Affiliates, name: "affiliates" },
    { path: '/events', component: Events, name: "events" },
    { path: '/login', component: Login },
    { path: '/perdidos', component: Lost },
    { path: '/amiguinhos', component: Kids },
    { path: '/affiliate/:id', component: Affiliate },
];

export default routes;