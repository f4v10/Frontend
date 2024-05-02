<script setup>
import Sidebar from 'primevue/sidebar';

</script>

<template>
  <div class="container">
    <Sidebar :visible="true" :showCloseIcon="false" class="p-sidebar-sm">
      <template #header>
        <h3 class="sidebar-title">TrackMyRoute</h3>
      </template>
      <ul class="p-list-none">
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Notificaciones</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Buscar rutas</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Pagar pasaje</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Promociones</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Historial de viajes</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Soporte y ayuda</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Configuración</span>
          </Button>
        </li>
        <li class="p-p-2 p-d-flex p-flex-row p-ai-center p-jc-between">
          <Button class="p-button-rounded p-button-text p-button-plain p-button-success">
            <span>Cerrar sesión</span>
          </Button>
        </li>
      </ul>
    </Sidebar>
  </div>
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