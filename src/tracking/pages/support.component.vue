
<template>
  <div class="container-config">
    <div class="column-left">
      <pv-card style="width: 100%; overflow: hidden" class="bg-white">
        <template #title>
          <h1 class="titles">Configuración</h1>
        </template>
        <template #content>
          <img alt="profile" src="../../../public/images/profile.png" class="profile-image"/>
        </template>
        <template #footer>
          <h1 class="titles">Plan Actual Free</h1>
          <pv-button class="button-plan" >
            Cambiar Plan
          </pv-button>
        </template>
      </pv-card>
    </div>
    <div class="column-right">
      <div class="input-container">
        <span class="text-input">Nombre</span>
        <button class="icon-button">
          <i class="pi pi-pencil"></i>
        </button>
      </div>
      <div class="input-container">
        <span class="text-input">Apellido</span>
        <button class="icon-button">
          <i class="pi pi-pencil"></i>
        </button>
      </div>
      <div class="input-container">
        <span class="text-input">Email</span>
        <button class="icon-button">
          <i class="pi pi-pencil"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.container-config {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 2%;
  overflow: hidden;
  width: 50vw;
  height: 50vh;
}

.column-left, .column-right {
  background: #FFF;

}

.titles {
  color: black; /* Color del texto */
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size:40px;
}
.text-input{
  color: black; /* Color del texto */
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}
.profile-image {
  width: 50%; /* Reducción del tamaño de la imagen en un 50% */
  display: block; /* Asegura que la imagen no tenga espacio extra alrededor */
  margin: auto; /* Centra la imagen horizontalmente dentro del contenedor */
}

.column-right {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el contenido verticalmente */
  align-items: center; /* Centra el contenido horizontalmente */
}
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #D9D9D9;
  border-radius: 4px;
  width:70%;
  margin-bottom: 20px;
}

.input-container span {
  font-size: 30px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color:black;
}
.button-plan {
  background-color: #0066FF;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size:25px;
  width:35%;
}

</style>
<script setup lang="ts">
</script>
[07:50, 04/05/2024] Diego Acuña: support.component:
<template>
  <div class="support-container">
    <pv-card style="width: 100%; overflow: hidden" class="bg-white">
      <template #title>
        <h1 class="titles">Soporte y Ayuda</h1>
      </template>
      <template #content>
        <div class="search-container">
          <pv-inputtext placeholder="Escribe tu duda" class="search-input" />
          <pv-button class="search-button" icon="pi pi-search"></pv-button>
        </div>
      </template>
      <template #footer>
        <pv-button class="whatsapp-button" label="Contacta a un asesor por WhatsAppㅤ" icon="pi pi-whatsapp" iconPos="right"></pv-button>
      </template>
    </pv-card>
  </div>
</template>


<style>
.support-container {
  display: flex;
  justify-content: center;
  width:45vw;
}
.titles {
  color: black;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 10px;
}


.search-input {
  width: 100%; /* Asegura que ocupe todo el espacio posible en su contenedor */
  background-color: #FFFFFF;
  border: 1px solid #000000;
}
.search-input::placeholder {
  color: black; /* Color del placeholder */
}


.search-button {
  background-color: #0038FF; /* Fondo azul */
  color: white; /* Texto e ícono en blanco */
  border: none; /* Sin bordes */
  border-radius: 20%;
}

.search-button .pi {
  color: white;
  font-size:20px;

}

.whatsapp-button{
  background-color: #0038FF;
  color: white;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.whatsapp-button .pi {
  color: white;
  font-size:40px;
}
.whatsapp-button label {
  padding-right: 20px;
}

</style>
<script>

</script>