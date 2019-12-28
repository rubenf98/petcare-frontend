<template>
  <div>
    <Header
      title="amiguinhos"
      description="Encontra o teu melhor amigo!"
      image="background-purple-yellow"
    ></Header>

    <div class="background">
      <div class="container margin">
        <div class="row">
          <div class="col-sm-4" v-for="animal in animals" v-bind:key="animal.id">
            <div class="card margin shadow p-3 mb-5 bg-white rounded">
              <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">{{animal.name}}</h5>
                <p class="card-text">{{animal.email}}</p>
                <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";

export default {
  name: "homepage",
  components: {
    Header
  },
  data() {
    return {
      animals: null
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.animals = res.data;
    });
  }
};
</script>

<style scoped>
.container {
  padding-top: 5%;
}
.card-body {
  color: white;
}
.card {
  background-color: #330000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23D18'/%3E%3Cstop offset='1' stop-color='%23330000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FA3' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FA3' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.secondary-nav {
  background-color: rgb(0, 0, 255, 0.8);
  height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 50px;
}

.nav-link {
  color: white;
}

.jumbotron {
  height: 350px;
  background-image: url("/background/background-blue.svg");
  background-attachment: fixed;
  background-size: cover;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  margin: 0;
}

.margin {
  margin-bottom: 5%;
}

.display-4,
.lead {
  color: white;
  text-align: center;
}
.display-4 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 5rem;
}
</style>