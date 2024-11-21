<script>
import QRCode from "qrcode"; // Instala esta librería: npm install qrcode

export default {
  name: "Metodo",
  props: {
    total: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedMethod: null,
      generatedCode: null,
      qrCodeUrl: null,
      showCardForm: false,
      showQR: false,
      showCode: false,
      paymentSuccess: false, // Controla si se muestra el mensaje de éxito
    };
  },
  methods: {
    selectMethod(method) {
      this.selectedMethod = method;
      this.resetViews();

      if (method === "Tarjeta") {
        this.showCardForm = true;
      } else if (method === "Yape" || method === "Plin") {
        this.generateQRCode();
        this.showQR = true;
      } else if (method === "PayPal") {
        this.generateCode();
        this.showCode = true;
      }
    },
    resetViews() {
      this.showCardForm = false;
      this.showQR = false;
      this.showCode = false;
      this.qrCodeUrl = null;
      this.paymentSuccess = false; // Resetea el mensaje de éxito
    },
    async generateQRCode() {
      try {
        const qrData = `Método: ${this.selectedMethod}, Total: S/${this.total}`;
        this.qrCodeUrl = await QRCode.toDataURL(qrData);
      } catch (error) {
        console.error("Error al generar el código QR:", error);
      }
    },
    generateCode() {
      this.generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    },
    confirmPayment() {
      // Simula la confirmación del pago
      if (this.selectedMethod) {
        this.paymentSuccess = true;
        setTimeout(() => {
          alert("¡Pago exitoso! Gracias por tu compra.");
        }, 500);
      } else {
        alert("Por favor, selecciona un método de pago.");
      }
    },
  },
};
</script>

<template>
  <div class="payment-container">
    <h2>Seleccione un Método de Pago</h2>
    <div class="buttons">
      <button @click="selectMethod('Tarjeta')">Tarjeta</button>
      <button @click="selectMethod('Yape')">Yape</button>
      <button @click="selectMethod('Plin')">Plin</button>
      <button @click="selectMethod('PayPal')">PayPal</button>
    </div>

    <!-- Método de Pago Seleccionado -->
    <div v-if="selectedMethod" class="payment-details">
      <h3>Método de Pago: {{ selectedMethod }}</h3>

      <!-- Tarjeta -->
      <div v-if="showCardForm" class="card-form">
        <h4>Formulario de Tarjeta</h4>
        <input type="text" placeholder="Nombre en la tarjeta" />
        <input type="text" placeholder="Número de tarjeta" maxlength="16" />
        <input type="text" placeholder="Fecha de expiración (MM/AA)" />
        <input type="text" placeholder="CVV" maxlength="3" />
      </div>

      <!-- QR Code -->
      <div v-if="showQR" class="qr-code">
        <h4>Escanea el Código QR</h4>
        <img :src="qrCodeUrl" alt="QR Code" />
      </div>

      <!-- PayPal Code -->
      <div v-if="showCode" class="paypal-code">
        <h4>Código de Confirmación</h4>
        <p>Código: <strong>{{ generatedCode }}</strong></p>
      </div>
    </div>

    <!-- Botón de Confirmar -->
    <div class="confirm-container">
      <button @click="confirmPayment" class="confirm-button">Confirmar</button>
    </div>

    <!-- Mensaje de Éxito -->
    <div v-if="paymentSuccess" class="success-message">
      <p>¡Pago realizado con éxito!</p>
    </div>
  </div>
</template>

<style scoped>
.payment-container {
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.buttons button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.buttons button:hover {
  background-color: #0056b3;
}

.payment-details {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}

.card-form input {
  display: block;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.qr-code img {
  display: block;
  margin: 0 auto;
  max-width: 200px;
}

.paypal-code {
  font-size: 1.2em;
  font-weight: bold;
  text-align: center;
}

.confirm-container {
  margin-top: 20px;
}

.confirm-button {
  padding: 10px 20px;
  border: none;
  background-color: #28a745;
  color: white;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
}

.confirm-button:hover {
  background-color: #218838;
}

.success-message {
  margin-top: 20px;
  color: green;
  font-size: 1.5em;
  font-weight: bold;
}
</style>
