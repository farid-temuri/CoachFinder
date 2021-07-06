import { createRouter, createWebHistory } from 'vue-router';
import coachDetail from './pages/coaches/coachDetail.vue';
import coachesList from './pages/coaches/CoachesList.vue';
import coachRegistration from './pages/coaches/CoachRegistration.vue';
import contactCoach from './pages/requests/ContactCoach.vue';
import requestRecieved from './pages/requests/RequestRecieved.vue';
import coachDetail from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', componen: coachesList },
        {
            path: '/coaches/:id',
            componen: coachDetail,
            children: [{ path: 'contact', component: contactCoach }]
        },
        { path: '/register', componen: coachRegistration },
        { path: '/requests', componen: requestRecieved },
        { path: '/:notFound(.*)', componen: coachDetail }
    ]
});

export default router;