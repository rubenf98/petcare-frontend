<template>
  <div>
    <Header title="petcare" description="apps for good" image="background-blue"></Header>

    <div class="secondary-nav">
      <div class="container">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Todos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Spad</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Canil Municipal</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container margin">
      <div class="row">
        <div class="col-sm-4" v-for="animal in animals" v-bind:key="animal.id">
          <div class="card rounded margin">
            <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{animal.name}}</h5>
              <p class="card-text">{{animal.email}}</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
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