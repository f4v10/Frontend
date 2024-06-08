<script>
import {Notification} from "@/tracking/model/notifications/notification.entity.js";
import {NotificationsApiService} from "@/tracking/services/notifications/notifications-api.service.js";
import NotificationList from "@/tracking/components/notification-list.vue";

export default {
  name: "notifications.component",
  title: "Notifications",
  components: {NotificationList},
  data() {
    return {
      notifications: [],
      errors: []
    }
  },
  created() {
    this.getNotifications();
  },
  methods: {
    buildNotificationListFromResponseData(notifications){
      return notifications.map(notifications => new Notification(notifications.title, notifications.description));
    },

    getNotifications() {
      const apiService = new NotificationsApiService();
      apiService.getAll()
          .then(response=> {
            this.notifications = this.buildNotificationListFromResponseData(response.data);
          })
          .catch(e=>this.errors.push(e))
    }
  }
}
</script>

<template>
  <notification-list nots="notifications"/>
</template>

<style scoped>

</style>