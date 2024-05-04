import {createRouter, createWebHistory} from "vue-router";
import PromosComponent from "@/tracking/pages/promos.component.vue";
import HistoryComponent from "@/tracking/pages/history.component.vue";
import ConfigComponent from "@/tracking/pages/config.component.vue";
import SupportComponent from "@/tracking/pages/support.component.vue";

const router  = createRouter({
    history: createWebHistory(),
    routes : [
        {path: '/promos', component: PromosComponent, meta: {title: 'Promociones'}},
        {path: '/history', component: HistoryComponent, meta: {title: 'Historial de viajes'}},
        {path:'/config',component: ConfigComponent,meta: {title: 'Configuracion'}},
        {path:'/support',component: SupportComponent,meta: {title: 'Support'}},
        {path: '/', redirect: '/promos'},
    ],
});

router.beforeEach((to,
                   from,
                   next) => {
    let baseTitle = 'TrackMyRoute1';
    document.title = ${baseTitle} | ${to.meta['title']};
    next();
});


export default router;