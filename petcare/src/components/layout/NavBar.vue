<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg">
      <a class="navbar-brand" href="/">
        <router-link :to="{name: 'homepage'}" class="d-flex align-items-center">
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
            <router-link class="nav-link" to="/perdidos">Perdidos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/amiguinhos">Amiguinhos</router-link>
          </li>
          <li class="nav-item">
            <span class="spmodal nav-link" data-target="#loginModal" data-toggle="modal">Login</span>
          </li>
        </ul>
      </div>
    </nav>
    <Login></Login>
  </div>
</template>

<style scoped>
.navbar {
  background-color: transparent;
}
.navbar-brand span {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}
.navbar-brand span:hover {
  text-decoration: none;
}
.nav-link {
  color: white;
  font-size: 1.2em;
  cursor: pointer;
}
</style>

<script>
import Login from "../auth/Login.vue";

export default {
  name: "NavBar",
  components: {
    Login
  }
};
</script>