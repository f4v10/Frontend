import {createRouter, createWebHistory} from "vue-router";
import PromosComponent from "@/tracking/pages/promos.component.vue";
import HistoryComponent from "@/tracking/pages/history.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/promos', component: PromosComponent, meta: {title: 'Promociones'}},
        {path: '/history', component: HistoryComponent, meta: {title: 'Historial de viajes'}},
        {path: '/', redirect: '/home'},
    ],
});

router.beforeEach((to,
                   from,
                   next) => {
    let baseTitle = 'TrackMyRoute1';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});


export default router;
