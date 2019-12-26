<template>
  <div>
    <Header title="Eventos" description="Eventos do seu interesse" image="background-green" class="margin"></Header>

    <div class="container margin">
      <div
        class="card mb-3 margin"
        v-for="event in events"
        v-bind:key="event.id"
      >
        <div class="row">
          <div class="col-md-4">
            <img
              src="https://animal-event.bartels-events.nl/wp-content/uploads/sites/5/2019/05/AE2020_Profielfoto-website-1.jpg"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{event.name}}</h5>
              <p class="card-text">{{event.email}}</p>
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

<style scoped>
.margin {
  margin-bottom: 5%;
}
</style>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";

export default {
  name: "events",
  components: {
    Header
  },
  data() {
    return {
      events: null
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.events = res.data;
    });
  }
};
</script>
