<template>
  <div class="notification-list-container">
    <header>
      <h1>Notificaciones</h1>
      <div class="header-actions">
        <input
            type="text"
            placeholder="Buscar por título..."
            v-model="filter"
            class="filter-input"
        />
        <button @click="clearAll" class="clear-button">Eliminar todas</button>
        <button @click="addNotification" class="add-button">Agregar Notificación</button>
      </div>
    </header>

    <div class="notification-list">
      <div v-if="filteredNotifications.length > 0">
        <notification-card
            v-for="notification in filteredNotifications"
            :key="notification.id"
            :notification="notification"
            @remove="removeNotification"
            @edit="editNotification(notification.id)"
        />
      </div>
      <div v-else class="no-notifications">
        <p>No hay notificaciones que coincidan con el filtro.</p>
      </div>
    </div>

    <!-- Modal para editar -->
    <div v-if="editingNotification" class="edit-modal">
      <div class="modal-content">
        <h2>Editar Notificación</h2>
        <input
            type="text"
            v-model="editingNotification.title"
            placeholder="Título"
        />
        <textarea
            v-model="editingNotification.message"
            placeholder="Mensaje"
        ></textarea>
        <input
            type="date"
            v-model="editingNotification.date"
            placeholder="Fecha"
        />
        <div class="modal-actions">
          <button @click="saveEdit" class="save-button">Guardar</button>
          <button @click="cancelEdit" class="cancel-button">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NotificationCard from "./notification-card.vue";

export default {
  name: "NotificationList",
  components: {
    NotificationCard,
  },
  data() {
    return {
      notifications: [
        { id: 4, title: "Evento cercano", message: "Tienes un evento programado para mañana", date: "2024-11-22" },
        { id: 5, title: "Promoción especial", message: "Descuento del 50% en tu próxima compra", date: "2024-11-21" },
        { id: 6, title: "Sistema actualizado", message: "El sistema se actualizó correctamente", date: "2024-11-20" },
        { id: 7, title: "Tarea pendiente", message: "Recuerda completar tu tarea de matemáticas", date: "2024-11-19" },
        { id: 8, title: "Nuevo amigo", message: "Juan Pérez te ha enviado una solicitud de amistad", date: "2024-11-18" },
        { id: 9, title: "Pago recibido", message: "Hemos recibido tu pago por el servicio Premium", date: "2024-11-17" },
        { id: 10, title: "Actualización de contraseña", message: "Tu contraseña se cambió correctamente", date: "2024-11-16" },
        { id: 11, title: "Nuevo comentario", message: "Alguien comentó en tu publicación", date: "2024-11-15" },
        { id: 12, title: "Entrega retrasada", message: "Tu pedido llegará con un retraso de 2 días", date: "2024-11-14" },
        { id: 13, title: "Nuevo curso disponible", message: "Ya puedes acceder al curso de Programación Avanzada", date: "2024-11-13" },
        { id: 14, title: "Actualización requerida", message: "Tu app requiere una actualización", date: "2024-11-12" },
        { id: 15, title: "Felicitaciones", message: "¡Has completado el nivel 5 de aprendizaje!", date: "2024-11-11" },
        { id: 16, title: "Cambio de horario", message: "El horario del evento ha sido modificado", date: "2024-11-10" },
        { id: 17, title: "Nuevo mensaje privado", message: "Tienes un mensaje en tu bandeja de entrada", date: "2024-11-09" },
        { id: 18, title: "Suscripción renovada", message: "Tu suscripción se renovó automáticamente", date: "2024-11-08" },
        { id: 19, title: "Recordatorio de cita", message: "No olvides tu cita médica el próximo lunes", date: "2024-11-07" },
      ]
      ,
      filter: "",
      editingNotification: null,
    };
  },
  computed: {
    filteredNotifications() {
      return this.notifications.filter((n) =>
          n.title.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },
  methods: {
    removeNotification(id) {
      this.notifications = this.notifications.filter((n) => n.id !== id);
    },
    clearAll() {
      this.notifications = [];
    },
    addNotification() {
      const newId = this.notifications.length
          ? this.notifications[this.notifications.length - 1].id + 1
          : 1;
      this.notifications.push({
        id: newId,
        title: "Nueva Notificación",
        message: "Este es un nuevo mensaje.",
        date: new Date().toISOString().split("T")[0],
      });
    },
    editNotification(id) {
      this.editingNotification = { ...this.notifications.find((n) => n.id === id) };
    },
    saveEdit() {
      const index = this.notifications.findIndex(
          (n) => n.id === this.editingNotification.id
      );
      if (index !== -1) {
        this.notifications[index] = { ...this.editingNotification };
      }
      this.editingNotification = null;
    },
    cancelEdit() {
      this.editingNotification = null;
    },
  },
};
</script>

<style scoped>
.notification-list-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

header {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.header-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-input {
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.clear-button,
.add-button {
  flex: 1;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.clear-button {
  background-color: #ff4d4f;
  color: white;
}

.add-button {
  background-color: #4caf50;
  color: white;
}

.notification-list {
  width: 100%;
  max-width: 800px;
}

.no-notifications {
  text-align: center;
  padding: 20px;
  color: #666;
}

.edit-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.modal-content h2 {
  margin-bottom: 15px;
  text-align: center;
}

.modal-content input,
.modal-content textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
}

.save-button {
  background-color: #4caf50;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}
</style>
