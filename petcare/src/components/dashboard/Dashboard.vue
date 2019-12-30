<template>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>

    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "dashboard",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  width: 100%;
}
.container-fluid {
  padding: 0;
}
</style>