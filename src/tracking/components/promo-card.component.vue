<script>
export default {
  name: "promo-card",
  props: {
    promo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="promo-card">
    <img :src="promo.image" :alt="promo.title" class="promo-image" />
    <div class="promo-details">
      <h3>{{ promo.title }}</h3>
      <p>{{ promo.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.promo-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.promo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.promo-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.promo-details {
  padding: 15px;
  text-align: center;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 10px;
}

p {
  font-size: 1em;
  color: #555;
}
</style>
