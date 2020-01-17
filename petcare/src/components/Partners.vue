<template>
  <div>
    <Header
      title="Parceiros"
      description="Os colegas da nossa plataforma"
      image="background-red"
      class="margin"
    ></Header>

    <div class="card-container container">
      <div class="flip-card" v-for="partner in partners" v-bind:key="partner.id">
        <router-link :to="{ name: 'partner', params: {id: partner.id } }">
          <div class="flip-card-inner">
            <div class="flip-card-side flip-card-front">
              <img
                src="http://www.zoonoses.piracicaba.sp.gov.br/site/images/stories/logo%20adote%20um%20amigo.gif"
                class="logo"
              />
            </div>
            <div class="flip-card-side flip-card-back">
              <div class="flip-card-title">
                <h1>{{partner.name}}</h1>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <FPPartners />
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";
import FPPartners from "./layout/FPPartners.vue";

export default {
  name: "partners",
  components: {
    Header,
    FPPartners
  },
  data() {
    return {
      partners: null
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.partners = res.data;
    });
  }
};
</script>

<style scoped>
.card-container {
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.flip-card {
  min-width: 250px;
  height: 300px;
  perspective: 1000px;
  margin: 3% auto;
  cursor: pointer;
  background-color: transparent;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.flip-card-side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card-front {
  background-color: transparent;
}
.flip-card-back {
  background-color: white;
  color: black;
  transform: rotateY(180deg);
}
.flip-card:hover .flip-card-inner,
.flip-card:active .flip-card-inner {
  transform: rotateY(-180deg);
}
.logo {
  width: 90%;
  height: auto;
}
</style>
