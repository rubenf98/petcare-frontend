<template>
  <div class="modal fade" id="eventsModal" role="dialog">
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
            <input
              v-model="data.price"
              type="number"
              min="0"
              class="form-control"
              placeholder="Preço (Coloque 0 para grátis)"
            />
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <input v-model="data.start" class="form-control" type="date" name="start" />
            </div>
            <div class="form-group col-md-6">
              <input v-model="data.end" class="form-control" type="date" name="end" />
            </div>
          </div>

          <div class="form-group">
            <textarea
              v-model="data.description"
              class="form-control form-textarea"
              placeholder="Pequena descrição do evento"
              rows="3"
            ></textarea>
          </div>

          <div v-if="!data.title" class="form-group">
            <input type="file" name="image" id />
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" @click="submitData()" class="btn btn-primary">Enviar</button>
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
              price: data.price,
              start: data.start,
              end: data.end
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
              title: data.name,
              description: data.name
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
