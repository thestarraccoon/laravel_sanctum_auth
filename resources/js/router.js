import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
        path: '/get',
        component: () => import('./components/Get.vue'),
        name: 'get.index'
    },
    {
        path: '/login',
        component: () => import('./components/Login.vue'),
        name: 'user.login'
    },
    {
        path: '/register',
        component: () => import('./components/Register.vue'),
        name: 'user.register'
    },
    {
        path: '/personal',
        component: () => import('./components/Personal.vue'),
        name: 'user.personal'
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

router.beforeEach(( to, from , next) => {
    const token = localStorage.getItem('x_xsrf_token');

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.register') {
            return next();
        } else {
            return next({
                name: 'user.login'
            });
        }
    }

    if (to.name === 'user.login' || to.name === 'user.register' && token) {
        return next({
            name: 'user.personal'
        })
    }

    next();
})

export default router;
