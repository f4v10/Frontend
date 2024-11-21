<template>
  <div class="container">
    <!-- Mapa principal -->
    <div class="map-container">
      <iframe
          src="//wikiroutes.info/es/widget?t=4&c=1471"
          frameborder="0"
          allowfullscreen=""
          scrolling="no"
          class="map"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackMyRouteComponent",
};
</script>

<style scoped>
/* General */
.container {
  font-family: Arial, sans-serif;
  color: #333;
  padding: 20px;
}

/* Cabecera */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.menu a {
  margin: 0 10px;
  text-decoration: none;
  color: #007bff;
}

/* Mapa */
.map-container {
  margin: 20px auto;
  text-align: center;
}

.map {
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 10px;
}
</style>
