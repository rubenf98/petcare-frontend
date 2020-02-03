<template>
  <div class="modal fade" id="newsModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered dashboard-modal" role="document">
      <div class="modal-content form-background">
        <div class="modal-header">
          <h4 class="modal-title">Formulário</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input v-model="data.title" type="text" class="form-control" placeholder="Nome" />
          </div>

          <div class="form-group">
            <textarea
              v-model="data.description"
              class="form-control form-textarea"
              placeholder="Pequena descrição da notícia"
              rows="3"
            ></textarea>
          </div>

          <div class="form-group">
            <input type="file" name="image" />
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JQuery from "jquery";
let $ = JQuery;
const { url } = require("../../../../helper");

export default {
  props: ["data", "post"],
  methods: {
    submitData() {
      const { data, post } = this;

      if (post) {
        axios
          .post(
            url + "/users",
            {
              title: data.title,
              description: data.description,
              image: data.image
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(function(res) {
            console.log("success");
          })
          .catch(function(e) {
            console.log("error");
          });
      } else {
        axios
          .put(
            url + "/users/" + data.id,
            {
              title: data.title,
              description: data.description,
              image: data.image
            },
            {
              headers: { token: localStorage.token }
            }
          )
          .then(function(res) {
            console.log("success");
          })
          .catch(function(e) {
            console.log("error");
          });
      }
    }
  },
  mounted() {
    console.log("nasceu");
  }
};
</script>

<style scoped>
@import "/css/dashboard.css";
</style>
