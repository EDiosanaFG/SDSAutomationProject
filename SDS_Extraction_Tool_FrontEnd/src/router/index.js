import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import { useAuthStore } from '@/stores/auth';
/**
 * Available routes
 */
const routes = [
    { path: '/login', component: Login },
    { path: '/', component: Home, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


//Define authentication requirement
router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
        return next('/login');
    }
    if (to.path === 'login' && !auth.isAuthenticated) {
        return next('/');
    }
    next();
});

export default router;
