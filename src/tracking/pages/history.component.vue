<script>
import axios from "axios";

export default {
  name: "history-component",
  data() {
    return {
      trips: [], // Almacena los viajes originales
      filteredTrips: [], // Almacena los viajes filtrados
      errors: [], // Manejo de errores
      searchQuery: "", // Entrada de búsqueda
      sortKey: "", // Columna para ordenar
      sortAsc: true, // Dirección de orden (ascendente o descendente)
    };
  },
  created() {
    this.fetchTrips();
  },
  methods: {
    async fetchTrips() {
      try {
        const response = await axios.get("http://localhost:3000/trips");
        this.trips = response.data;
        this.filteredTrips = response.data; // Inicialmente muestra todos
      } catch (error) {
        this.errors.push("Error al obtener los viajes: " + error.message);
      }
    },
    sortTrips(key) {
      if (this.sortKey === key) {
        this.sortAsc = !this.sortAsc; // Alterna entre ascendente/descendente
      } else {
        this.sortKey = key;
        this.sortAsc = true; // Por defecto ordena ascendente
      }
      const direction = this.sortAsc ? 1 : -1;
      this.filteredTrips.sort((a, b) => {
        if (a[key] > b[key]) return direction;
        if (a[key] < b[key]) return -direction;
        return 0;
      });
    },
    filterTrips() {
      const query = this.searchQuery.toLowerCase();
      this.filteredTrips = this.trips.filter((trip) => {
        return (
            trip.origin.toLowerCase().includes(query) ||
            trip.destination.toLowerCase().includes(query) ||
            trip.type.toLowerCase().includes(query) ||
            trip.price.toString().includes(query)
        );
      });
    },
  },
};
</script>

<template>
  <div>
    <h1 class="title">Historial de Viajes</h1>

    <!-- Mensaje de Error -->
    <div v-if="errors.length" class="error">
      <p>Error al cargar el historial de viajes:</p>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- Filtro -->
    <div class="filter-container">
      <input
          type="text"
          v-model="searchQuery"
          @input="filterTrips"
          placeholder="Buscar por origen, destino, tipo o precio..."
          class="filter-input"
      />
    </div>

    <!-- Tabla de Viajes -->
    <div v-if="filteredTrips.length" class="trips-container">
      <table class="trips-table">
        <thead>
        <tr>
          <th @click="sortTrips('id')">#</th>
          <th @click="sortTrips('idUser')">Usuario</th>
          <th @click="sortTrips('type')">Tipo</th>
          <th @click="sortTrips('origin')">Origen</th>
          <th @click="sortTrips('destination')">Destino</th>
          <th @click="sortTrips('startDate')">Hora de Inicio</th>
          <th @click="sortTrips('endDate')">Hora de Fin</th>
          <th @click="sortTrips('price')">Precio (S/)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="trip in filteredTrips" :key="trip.id">
          <td>{{ trip.id }}</td>
          <td>{{ trip.idUser }}</td>
          <td>{{ trip.type }}</td>
          <td>{{ trip.origin }}</td>
          <td>{{ trip.destination }}</td>
          <td>{{ trip.startDate }}</td>
          <td>{{ trip.endDate }}</td>
          <td>{{ trip.price.toFixed(2) }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Sin Resultados -->
    <div v-else>
      <p>No se encontraron viajes en el historial.</p>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin: 20px 0;
  font-size: 2em;
}

.filter-container {
  text-align: center;
  margin-bottom: 20px;
}

.filter-input {
  width: 50%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.trips-container {
  margin: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
}

.trips-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.trips-table th,
.trips-table td {
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
}

.trips-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.trips-table th:hover {
  background-color: #eaeaea;
}

.trips-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.error {
  color: red;
  text-align: center;
  margin: 20px 0;
}
</style>
