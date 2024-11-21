<script>
import PromoCard from "@/tracking/components/promo-card.component.vue";

export default {
  name: "promo-list",
  components: { PromoCard },
  props: {
    promos: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <div class="promo-list">
    <promo-card v-for="promo in promos" :key="promo.id" :promo="promo" />
  </div>
</template>

<style scoped>
.promo-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
