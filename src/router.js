import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', componen: null },
        {
            path: '/coaches/:id',
            componen: null,
            children: [{ path: 'contact', component: null }]
        },
        { path: '/register', componen: null },
        { path: '/requests', componen: null },
        { path: '/:notFound(.*)', componen: null }
    ]
});

export default router;