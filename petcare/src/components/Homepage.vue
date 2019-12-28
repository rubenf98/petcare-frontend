<template>
  <div>
    <Header title="petcare" description="Apps For Good" image="background-blue" class="margin"></Header>

    <div class="container margin">
      <div class="row">
        <div
          class="col-sm-4"
          v-for="animal in animals"
          v-bind:key="animal.id"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <div class="card margin shadow p-3 mb-5 bg-white rounded" @click="storeID(animal)">
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
    <div v-if="data">
      <AnimalProfile :animal="data"></AnimalProfile>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";
import AnimalProfile from "./AnimalProfile.vue";

export default {
  name: "homepage",
  components: {
    Header,
    AnimalProfile
  },
  data() {
    return {
      animals: null,
      data: null
    };
  },
  methods: {
    storeID(animal) {
      this.data = animal;
    }
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

.card {
  cursor: pointer;
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