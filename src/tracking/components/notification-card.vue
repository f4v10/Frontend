<script>
import {Notification} from "@/tracking/model/notifications/notification.entity.js";
export default {
  name: "notification-card",
  props: {nots:Notification}
}
</script>

<template>
  <pv-card class="p-col-4 mt-4 mb-4 nots-card">
    <template #header>
      <p class="m-0"> Title: {{ nots.title }} </p>
    </template>
    <template #content>
      <p class="m-0"> Description: {{ nots.description }} </p>
    </template>
  </pv-card>
</template>

<style scoped>
.nots-card {
  width: 50%;
  margin: auto;
  text-align: center;
}
</style>