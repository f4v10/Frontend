<script >
  import SideBar from "@/public/pages/side-bar.component.vue";
  import SearchRoutes from "@/tracking/pages/search-routes.component.vue"
  import PayTicket from "@/tracking/pages/pay-ticket.component.vue"
  export default {
    name: "App",
    title: "TrackMyRoute2",
    components: {SearchRoutes, SideBar, PayTicket},
  }
</script>

<template>
  <div class="">
    <div class="sidebar-container">
      <side-bar></side-bar>
    </div>
    <div class="main-container">
<!--      <search-routes></search-routes>-->
      <pay-ticket></pay-ticket>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

body{
  background-color:white;
}
</style>
