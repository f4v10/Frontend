import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//PrimeVue
import PrimeVue from "primevue/config";

//PrimeVue Material Design Theme
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

//Router
import router from "@/router/index.js";
//PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';


createApp(App)
    .use(PrimeVue, {ripple:true})
    .use(router)
    .component('pv-data-table', DataTable)
    .component('pv-column', Column)
    .component('pv-button', Button)
    .component('pv-sidebar', Sidebar)
    .component('pv-dropdown', Dropdown)
    .mount('#app')
