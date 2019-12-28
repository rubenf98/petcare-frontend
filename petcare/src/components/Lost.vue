<template>
  <div>
    <Header
      title="Perdidos"
      description="Animais encontrados pelas associações"
      image="background-black"
      class="margin"
    ></Header>

    <SearchBar></SearchBar>

    <div class="container margin">
      <div class="row">
        <div class="col-sm-4" v-for="animal in animals" v-bind:key="animal.id">
          <div class="card margin shadow p-3 mb-5 bg-white rounded">
            <img
              src="https://image.cachorrogato.com.br/textimages/cachorros-tristes.jpg"
              class="card-img-top"
            />
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

<style scoped>
.margin {
  margin-bottom: 5%;
}

.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  background-color: #363636;
  border-radius: 30px;
  padding: 15px;
  width: 40%;
  min-width: 200px;
}

.search_input {
  color: white;
  width: 100%;
  border: 0;
  outline: 0;
  background: none;
  padding: 0 15px;
  caret-color: white;
}
</style>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";
import SearchBar from "./layout/SearchBar.vue";

export default {
  name: "lost",
  components: {
    Header,
    SearchBar
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
