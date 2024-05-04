
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

    <div class="auth-container" style="position: absolute; top: 0;">
      <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
        <a target="_self" href="http://localhost:5174/signing">
          <Button class="LogIn p-button-rounded p-button-text  p-button-success">Iniciar Sesion</Button>
        </a>
      </li>

      <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
        <a target="_self" href="http://localhost:5174/register">
          <!--          <Button class="LogIn p-button-rounded p-button-text p-button-plain p-button-success" @click="$router.push('/login')">Iniciar Sesion</Button>-->
          <Button class="Register p-button-rounded p-button-text p-button-plain p-button-success">Registrate</Button>
        </a>
      </li>
    </div>
    
    
  </div>
  <router-view></router-view>
</template>

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

li {
  list-style-type: none;
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
  background-color: #4b6def;
}

.p-button-success:focus {
  outline: none;
}

.p-button-success:active {
  background-color: #6282f6;
}
.p-list-none{
  margin-left: -35%;
}
.auth-container{

  margin-left: 70%;
}
.LogIn{
  margin-top: -0%;
  margin-left: 0%;
  width: 100px;
  padding: 10px;

}
.Register{
  margin-bottom: 100px;
  margin-left: 0%;
  width: 100px;
  padding: 10px;

}



.Register{
  background-color: #5b9aea;
}
.LogIn{
  background-color: #62c4cc;
}
</style>