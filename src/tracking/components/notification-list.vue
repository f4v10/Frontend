<script>
import NotificationCard from "@/tracking/components/notification-card.vue";
export default {
  name: "notification-list",
  components: {NotificationCard},
  props: {
    nots: {
      type: Array,
      required: true
    }
  },
}
</script>

<template>
  <div class="p-grid">
    <notification-card v-for="(nots,index) in nots" :key="index" :nots="nots"/>
  </div>
</template>

<style scoped>

</style>