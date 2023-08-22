import { createRouter, createWebHistory } from 'vue-router';
 
import NotFound from './pages/NotFound.vue';
 
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./pages/AppHome.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./pages/AppAbout.vue')
        },

        // RABBITS
        {
            path: '/rabbits/:id',
            name: 'rabbit-show',
            component: () => import('./pages/RabbitShow.vue')
        },

        // MATCH EVERYTHING ELSE
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFound 
        },
    ]
});
 
export { router };