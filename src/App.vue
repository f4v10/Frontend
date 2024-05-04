<script >
  import SideBar from "@/public/pages/side-bar.component.vue";
  import SearchRoutes from "@/tracking/pages/search-routes.component.vue"
  export default {
    name: "App",
    title: "TrackMyRoute2",
    components: {SearchRoutes, SideBar},
  }
</script>

<template>
  <div class="app-container">
    <div class="sidebar-container">
<!--      <side-bar></side-bar>-->
    </div>
    <div class="main-container">
      <search-routes></search-routes>
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

</style>
