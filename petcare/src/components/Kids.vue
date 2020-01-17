<template>
  <div>
    <Header
      title="amiguinhos"
      description="Encontra o teu melhor amigo!"
      image="background-purple-yellow"
    ></Header>

    <div class="background">
      <div class="container margin">
        <div v-for="(animal, index) in animals" v-bind:key="animal.id">
          <div v-if="index % 2 != 0" class="row">
            <div class="col-lg-8">
              <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" class="animal-img" />
            </div>
            <div class="animal-info col-lg-4">
              <h5 class="card-title">{{animal.name}}</h5>
              <p class="card-text">{{animal.email}}</p>
              <p class="card-text">
                <small>Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div v-if="index % 2 == 0" class="row">
            <div v-if="index % 2 == 0" class="order-md-2 col-lg-8 order-lg-2">
              <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" class="animal-img" />
            </div>
            <div class="animal-info order-md-1 col-lg-4 order-lg-1">
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
.row {
  margin: 10% auto;
}

.animal-info {
  display: table-cell;
  vertical-align: middle;
  border: 2px solid red;
}

.nav-link {
  color: white;
}

.margin {
  margin-bottom: 5%;
}

.animal-img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
</style>