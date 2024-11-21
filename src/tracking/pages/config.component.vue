<template>
  <div class="container-config">
    <!-- Sección Izquierda: Información del Usuario -->
    <div class="column-left">
      <pv-card style="width: 100%; overflow: hidden" class="bg-white">
        <template #title>
          <h1 class="titles">Configuración</h1>
        </template>
        <template #content>
          <img alt="profile" src="../../../public/images/profile.png" class="profile-image" />
        </template>
        <template #footer>
          <h1 class="titles">Plan Actual: Free</h1>
          <pv-button class="button-plan">
            Cambiar Plan
          </pv-button>
        </template>
      </pv-card>
    </div>

    <!-- Sección Derecha: Datos del Usuario -->
    <div class="column-right">
      <div class="input-container" v-for="(field, index) in userFields" :key="index">
        <span class="text-input">{{ field.label }}</span>
        <div class="input-actions">
          <button class="icon-button" @click="editField(field)">
            <i class="pi pi-pencil"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal para Editar Campos -->
  <div v-if="isEditing" class="modal-overlay">
    <div class="modal">
      <h2>Editar {{ editingField.label }}</h2>
      <input v-model="editingField.value" class="modal-input" />
      <div class="modal-buttons">
        <button class="modal-button save" @click="saveEdit">Guardar</button>
        <button class="modal-button cancel" @click="cancelEdit">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserConfig",
  data() {
    return {
      userFields: [
        { label: "Nombre", value: "Juan" },
        { label: "Apellido", value: "Pérez" },
        { label: "Email", value: "juan.perez@email.com" },
      ],
      isEditing: false, // Controla si se muestra el modal de edición
      editingField: null, // Campo que se está editando
    };
  },
  methods: {
    editField(field) {
      this.isEditing = true;
      this.editingField = { ...field }; // Crea una copia del campo para evitar modificar el original
    },
    saveEdit() {
      // Actualiza el valor del campo editado
      const fieldIndex = this.userFields.findIndex(
          (field) => field.label === this.editingField.label
      );
      if (fieldIndex > -1) {
        this.userFields[fieldIndex].value = this.editingField.value;
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editingField = null;
    },
  },
};
</script>

<style scoped>
/* Estructura general */
.container-config {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 80%;
  margin: 20px auto;
  border-radius: 10px;
  overflow: hidden;
}

/* Columna Izquierda */
.column-left {
  background: #fff;
  text-align: center;
}

.profile-image {
  width: 50%;
  margin: 20px auto;
  border-radius: 50%;
  border: 4px solid #d9d9d9;
}

/* Botón Cambiar Plan */
.button-plan {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
}

.button-plan:hover {
  background-color: #0056b3;
}

/* Columna Derecha */
.column-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
}

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #007bff;
  font-size: 1.2em;
}

.icon-button:hover {
  color: #0056b3;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 40%;
  text-align: center;
}

.modal-input {
  width: 80%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.modal-button {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

.modal-button.save {
  background-color: #28a745;
  color: white;
  border: none;
}

.modal-button.save:hover {
  background-color: #218838;
}

.modal-button.cancel {
  background-color: #dc3545;
  color: white;
  border: none;
}

.modal-button.cancel:hover {
  background-color: #c82333;
}
</style>
