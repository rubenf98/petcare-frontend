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
            <th scope="col">Título</th>
            <th scope="col">Descrição</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="dashboard-news-search" v-for="animal in animals" v-bind:key="animal.id">
            <td>{{animal.id}}</td>
            <td>{{animal.name}}</td>
            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquid similique corporis soluta pariatur, nesciunt error provident iste dolor officia dicta omnis repellendus, aut eum consequuntur repellat. Asperiores, maxime voluptates.</td>
            <td class="d-flex justify-content-around aign-items-center">
              <img src="/icon/edit.svg" class="icon" @click="editElement(animal)" />
              <img src="/icon/delete.svg" class="icon" @click="deleteElement(animal.id)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <NewsForm :data="animal" :post="post"></NewsForm>
  </div>
</template>

<script>
import NewsForm from "./form/NewsForm.vue";
import axios from "axios";
import SearchBar from "../layout/SearchBar.vue";
const { url } = require("../../../helper");
import JQuery from "jquery";
let $ = JQuery;

export default {
  components: {
    SearchBar,
    NewsForm
  },
  data() {
    return {
      animals: null,
      post: true,
      search: ".dashboard-news-search",
      animal: {
        id: null,
        title: null,
        description: null,
        price: null,
        start: null,
        end: null
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
      this.animal.title = e.name;
      this.animal.description = e.name;
      this.animal.price = e.name;
      this.animal.start = e.name;
      this.animal.end = e.name;

      $("#newsModal").modal("show");
    },
    resetElement() {
      this.post = true;
      this.animal.id = null;
      this.animal.title = null;
      this.animal.description = null;
      this.animal.price = null;
      this.animal.start = null;
      this.animal.end = null;

      $("#newsModal").modal("show");
    },
    deleteElement(e) {
      axios
        .delete(url + "/posts/" + e, {
          headers: { token: localStorage.token }
        })
        .then(res => {
          alert("success");
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
.profile-pic {
  width: 35px;
}
.icon {
  width: 20px;
  cursor: pointer;
}
</style>