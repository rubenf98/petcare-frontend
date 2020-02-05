<template>
  <div>
    <Header title="petcare" description="Apps For Good" image="background-blue.svg" class="margin"></Header>

    <div class="container margin">
      <a href="https://www.purina.pt/" target="_blank" rel="noopener noreferrer">
        <img src="/pub/product-purina.png" class="img-fluid" alt="Responsive image" />
      </a>

      <div class="row">
        <div
          class="col-sm-4"
          v-for="animal in animals"
          v-bind:key="animal.id"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <div class="card margin shadow my-5" @click="storeID(animal)">
            <img src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{animal.name}}</h5>
              <p class="card-text">{{animal.type}}, {{animal.breed}}</p>
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

const { url } = require("../../helper");

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
    axios.get(url + "/animal/all").then(res => {
      this.animals = res.data.data;
    });
  }
};
</script>

<style scoped>
.card {
  cursor: pointer;
}

.margin {
  margin-bottom: 5%;
}

.img-fluid {
  margin: auto;
  display: block;
  max-height: 300px;
}
</style>