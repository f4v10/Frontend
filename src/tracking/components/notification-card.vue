<template>
  <div class="notification-card">
    <h3 class="title">{{ notification.title }}</h3>
    <p class="message">{{ notification.message }}</p>
    <span class="date">{{ notification.date }}</span>
    <button class="close-btn" @click="$emit('remove', notification.id)">✖</button>
  </div>
</template>

<script>
export default {
  name: "NotificationCard",
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.notification-card {
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.message {
  font-size: 14px;
  margin-bottom: 5px;
}

.date {
  font-size: 12px;
  color: #666;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  color: #999;
}

.close-btn:hover {
  color: #ff0000;
}
</style>
