<script>
import Metodo from "./metod.vue";

export default {
  name: "pay-ticket.component",
  components: {
    Metodo,
  },
  data() {
    return {
      selectedBus: null,
      selectedRoute: null,
      hasHalfTicket: false,
      typeBus: [
        { name: "Metropolitano", code: "MT" },
        { name: "Corredor Azul", code: "CA" },
        { name: "Corredor Rojo", code: "CR" },
        { name: "Corredor Morado", code: "CM" },
        { name: "Rutas Tradicionales", code: "RT" }
      ],
      routes: [
        { name: "Metropolitano - Ruta Regular A (Naranjal - Estación Central)", price: 2.50, busType: "MT" },
        { name: "Metropolitano - Ruta Regular B (Naranjal - Estación Central)", price: 2.50, busType: "MT" },
        { name: "Corredor Azul - Ruta 301 (Amancaes - Miraflores)", price: 1.70, busType: "CA" },
        { name: "Corredor Rojo - Ruta 201 (San Juan de Miraflores - Javier Prado)", price: 1.70, busType: "CR" },
        { name: "Corredor Morado - Ruta 404 (San Juan de Lurigancho - Brasil)", price: 1.50, busType: "CM" },
        { name: "Ruta Tradicional 4501 (Villa El Salvador - La Molina)", price: 1.50, busType: "RT" },
        { name: "Ruta Tradicional 7303 (Comas - Chorrillos)", price: 1.50, busType: "RT" },
        { name: "Ruta Tradicional 8602 (Carabayllo - San Isidro)", price: 1.50, busType: "RT" },
        { name: "Ruta Tradicional 1801 (Ate - Callao)", price: 1.50, busType: "RT" },
        { name: "Ruta Tradicional 3804 (San Juan de Lurigancho - Miraflores)", price: 1.50, busType: "RT" } ,
      ],
    };
  },
  computed: {
    totalPrice() {
      if (this.selectedRoute) {
        const basePrice = this.selectedRoute.price;
        return this.hasHalfTicket ? (basePrice / 2).toFixed(2) : basePrice.toFixed(2);
      }
      return "0.00";
    },
  },
};
</script>

<template>
  <div class="pay-ticket-container">
    <div class="content">
      <!-- Sección de Total a Pagar -->
      <div class="left">
        <h2>Total a Pagar</h2>
        <p class="price">S/{{ totalPrice }}</p>

        <div class="selection">
          <p>Seleccionar Bus/Empresa de Transporte:</p>
          <pv-dropdown
              v-model="selectedBus"
              :options="typeBus"
              optionLabel="name"
              placeholder="Selecciona Bus/Empresa"
          />
        </div>

        <div class="selection">
          <p>Seleccionar Ruta:</p>
          <pv-dropdown
              v-model="selectedRoute"
              :options="routes"
              optionLabel="name"
              placeholder="Selecciona Ruta"
          />
        </div>

        <div class="selection">
          <p>¿Tiene medio pasaje?</p>
          <input type="checkbox" v-model="hasHalfTicket" />
        </div>
      </div>

      <!-- Componente de Métodos de Pago -->
      <div class="right">
        <Metodo :total="totalPrice" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pay-ticket-container {
  padding: 20px;
}

.content {
  display: flex;
  gap: 20px;
}

.left, .right {
  flex: 1;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.left {
  text-align: center;
}

.price {
  font-size: 2.5em;
  font-weight: bold;
  color: #0038ff;
}

.selection {
  margin: 20px 0;
}
</style>
