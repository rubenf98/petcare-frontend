<template>
  <div class="wrapper">
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>

    <div class="container-fluid">
      <router-view v-if="user != null" :user="user" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "./Sidebar.vue";
const { url } = require("../../../helper");

export default {
  name: "dashboard",
  components: {
    Sidebar
  },
  data() {
    return {
      user: null
    };
  },
  created() {
    axios
      .get(url + "/auth/actual", {
        headers: { Authorization: `Bearer ${localStorage.token}` }
      })
      .then(res => {
        this.user = res.data.data;
      })
      .catch(err => {
        console.log("erro");
      });
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