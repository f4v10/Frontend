<script>
import {Notification} from "@/tracking/model/notifications/notification.entity.js";
import {NotificationsApiService} from "@/tracking/services/notifications/notifications-api.service.js";

export default {
  name: "notifications.component",
  title: "Notifications",
  data() {
    return {
      notifications: [],
      notificationsService: new NotificationsApiService()
    }
  },
  created() {

  },
  methods: {
    initialize() {
      console.log('created');
      this.notificationsService.getAll()
          .then(response => {
            this.notifications = response.data;
            this.notifications = this.notifications.map(
                (notification) => {
                  return Notification.toDisplayableNotification(notification)
                }
            )
          })
    }
  }
}
</script>

<template>
  <div class="nots-header gap-2 align-items-center justify-content-between">
    <span class="m-0">Notifications</span>
  </div>
  <div class="nots-container">

  </div>
</template>

<style scoped>

</style>