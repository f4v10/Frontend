<script >
export default {
      name:'side-bar.component',
      title:'SideBar',
      data() {
        return {
          drawer:false,
          items:[
            {label:'Notificaciones', to: '/notifications'},
            {label:'Buscar rutas', to: '/search-routes'},
            {label:'Pagar pasaje', to: '/pay-ticket'},
            {label:'Promociones', to: '/promos'},
            {label:'Historial de viajes', to: '/history'},
            {label:'Soporte y ayuda', to: '/support'},
            {label:'Configuración', to: '/config'},
          ]
        };
      },
      methods: {
        toggleDrawer() {
          this.drawer = !this.drawer;
        }
      }
}
</script>

<template>
  <div class="container">
    <pv- :visible="true" :showCloseIcon="true" class="p-sidebar-sm w-full md:w-20rem lg:w-30rem" >
      <pv-button class="p-button-text text-white" icon="pi pi-bars" @click="toggleDrawer"/>
      <template #header>
        <h3 class="sidebar-title text-center w-full">TrackMyRoute</h3>
      </template>
      <ul class="p-list-none">
        <router-link v-for="item in items" :key="item.label"
                     v-slot="{navigate,href}" :to="item.to" custom>
          <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
            <pv-button  :href="href" class="p-button-rounded p-button-text p-button-plain p-button-success"  @click="navigate" >
              {{item.label}}
            </pv-button>
          </li>
        </router-link>
      </ul>
    </pv->
  </div>
  <router-view></router-view>
</template>

<style scoped>

.container{
  height: 100%;
  font-size: 32px;
}

.sidebar-title {
  font-family: 'MuseoModerno', sans-serif;
  font-size: 42px;
  font-weight: bold;
  margin: 20px 0;
}

ul li{
  list-style: none;
  margin: 30px 0;
}

.p-sidebar-sm {
  width: 200px;
}

li Button{
  width: 300px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
}

.p-button-success {
  background-color: #0038FF;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.p-button-success:hover {
  background-color: #1f4eff;
}

.p-button-success:focus {
  outline: none;
}

.p-button-success:active {
  background-color: #1f4eff;
}
.p-list-none{
  margin-left: -35%;
}
</style>