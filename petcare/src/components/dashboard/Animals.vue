<template>
  <div class="container-fluid background">
    <div class="table-filters">
      <SearchBar :search="search" />
    </div>

    <div class="table-responsive">
      <button
        type="button"
        @click="resetElement()"
        class="btn btn-primary float-right mb-2 spmodal"
      >Adicionar</button>
      <table class="table shadow-sm p-3 mb-5 bg-white rounded">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Espécie</th>
            <th scope="col">Caraterísticas</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="dashboard-animals-search" v-for="animal in animals" v-bind:key="animal.id">
            <td>{{animal.id}}</td>
            <td>{{animal.name}}</td>
            <td>{{animal.name}}, {{animal.name}}</td>
            <td>23 cm | 4 kg | 2 anos</td>
            <td>{{animal.name}}</td>
            <td class="d-flex justify-content-around aign-items-center">
              <img src="/icon/edit.svg" class="icon" @click="editElement(animal)" />
              <img src="/icon/delete.svg" class="icon" @click="deleteElement(animal.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AnimalForm :data="animal" :post="post"></AnimalForm>
  </div>
</template>

<script>
import JQuery from "jquery";
import axios from "axios";
import AnimalForm from "./form/AnimalForm.vue";
import SearchBar from "../layout/SearchBar.vue";

const { url } = require("../../../helper");
let $ = JQuery;

export default {
  components: {
    SearchBar,
    AnimalForm
  },
  data() {
    return {
      animals: null,
      post: true,
      search: ".dashboard-animals-search",
      animal: {
        id: null,
        name: null,
        breed: null,
        type: null,
        weight: null,
        size: null,
        age: null,
        status: null,
        description: null,
        personality: []
      }
    };
  },
  created: function() {
    axios.get(url + "/users").then(res => {
      this.animals = res.data;
    });
  },
  methods: {
    editElement(e) {
      this.post = false;
      this.animal.id = e.id;
      this.animal.name = e.name;
      this.animal.breed = e.name;
      this.animal.type = e.name;
      this.animal.weight = e.name;
      this.animal.size = e.name;
      this.animal.age = e.name;
      this.animal.status = e.name;
      this.animal.description = e.name;
      this.animal.personality = [e.name, e.name, e.name, e.name];

      $("#animalModal").modal("show");
    },
    resetElement() {
      this.post = true;
      this.animal.id = null;
      this.animal.name = null;
      this.animal.breed = null;
      this.animal.type = null;
      this.animal.weight = null;
      this.animal.size = null;
      this.animal.age = null;
      this.animal.status = null;
      this.animal.description = null;
      this.animal.personality = [];

      $("#animalModal").modal("show");
    },
    deleteElement(e) {
      axios
        .delete(url + "/posts/" + e, {
          headers: { token: localStorage.token }
        })
        .then(res => {
          location.reload();
        })
        .catch(err => {
          console.log("erro");
        });
    }
  }
};
</script>

<style scoped>
.background {
  background-color: rgba(248, 253, 255, 0.678);
  height: 100%;
}
.table-responsive {
  width: 80%;
  display: block;
  margin: 5% auto;
}
.table-filters {
  width: 100%;
  height: 80px;
  background: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 20px;
  cursor: pointer;
}
</style>