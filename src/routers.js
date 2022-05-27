import HomePage from './WebPages/HomePage.vue';
import AboutPage from './WebPages/AboutPage.vue';
import ContactPage from './WebPages/ContactPage.vue';
import ServicePage from './WebPages/ServicePage.vue';
import { createRouter,createWebHistory } from 'vue-router';

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'AboutPage',
        component:AboutPage,
        path:'/about'
    },
    {
        name:'ContactPage',
        component:ContactPage,
        path:'/contact'
    },
    {
        name:'ServicePage',
        component:ServicePage,
        path:'/service'
    },


];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;