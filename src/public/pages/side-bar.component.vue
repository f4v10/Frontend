<script >
export default {
      name:'side-bar.component',
      title:'SideBar',
      data() {
        return {
          drawer:false,
          items:[
            {label:'Notificaciones', to: '/promos'},
            {label:'Buscar rutas', to: '/promos'},
            {label:'Pagar pasaje', to: '/promos'},
            {label:'Promociones', to: '/promos'},
            {label:'Historial de viajes', to: '/history'},
            {label:'Soporte y ayuda', to: '/promos'},
            {label:'Configuración', to: '/promos'},
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
    <pv-sidebar :visible="true" :showCloseIcon="false" class="p-sidebar-sm">
      <template #header>
        <h3 class="sidebar-title">TrackMyRoute</h3>
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
    </pv-sidebar>
  </div>
  <router-view></router-view>
</template>

<style scoped>

.container{
  height: 100%;
}

.sidebar-title{
  text-align: center;
  font-size: 32px;
}

ul li{
  list-style: none;
  margin: 50px
}

.p-sidebar-sm {
  width: 200px;
}

li Button{
  width: 300px;
  height: 50px;
}

.p-button-success {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.p-button-success:hover {
  background-color: #3e8e41;
}

.p-button-success:focus {
  outline: none;
}

.p-button-success:active {
  background-color: #2e7d32;
}
</style>