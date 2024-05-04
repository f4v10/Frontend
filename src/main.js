

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
//PrimeVue
import PrimeVue from "primevue/config";

//PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-dark-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

//Router
import router from "@/router/index.js";
//PrimeVue Components
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card"
import InputText from 'primevue/inputtext';

createApp(App)
    .use(PrimeVue, {ripple:true})
    .use(router)
    .component('pv-data-table', DataTable)
    .component('pv-button',Button)
    .component('pv-column', Column)
    .component('pv-sidebar', Sidebar)
    .component('pv-card',Card)
    .component('pv-inputtext',InputText)
    .mount('#app')