<script>
import axios from "axios";
import PromoList from "@/tracking/components/promo-list.component.vue";

export default {
  name: "promos.component",
  components: { PromoList },
  data() {
    return {
      promos: [],
      errors: [],
    };
  },
  created() {
    this.getPromos();
  },
  methods: {
    async getPromos() {
      try {
        const response = await axios.get("http://localhost:3000/promos");
        this.promos = response.data;
      } catch (error) {
        this.errors.push(error.message);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Promociones</h1>

    <!-- Mensaje de Error -->
    <div v-if="errors.length" class="error">
      <p>Error al cargar promociones:</p>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <!-- Lista de Promociones -->
    <promo-list :promos="promos" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 20px 0;
}

.error {
  color: red;
  text-align: center;
  margin: 20px 0;
}
</style>
