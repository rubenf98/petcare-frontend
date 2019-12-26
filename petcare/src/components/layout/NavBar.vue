<template>
  <nav class="navbar fixed-top navbar-expand-lg">
    <a class="navbar-brand" href="/">
      <router-link :to="{name: 'homepage'}">
        <img src="/logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        <span>PetCare</span>
      </router-link>
    </a>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/affiliates">Afiliados</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/events">Eventos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: transparent;
}
span {
  color: white;
  text-decoration: none;
}
span:hover {
  text-decoration: none;
}
.nav-link {
  color: white;
}
</style>

<script>
export default {
  name: "NavBar"
};
</script>