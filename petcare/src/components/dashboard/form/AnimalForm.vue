<template>
  <div class="modal fade" id="animalModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered dashboard-modal" role="document">
      <div class="modal-content form-background">
        <div class="modal-header">
          <h4 class="modal-title">Formulário</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center my-2">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                value="Cão"
                type="radio"
                v-model="data.type"
                id="specie1"
                name="specie"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="specie1">Cão</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                value="Gato"
                v-model="data.type"
                type="radio"
                id="specie2"
                name="specie"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="specie2">Gato</label>
            </div>
          </div>

          <div class="d-flex justify-content-center my-2">
            <div class="custom-control custom-radio custom-control-inline">
              <input
                value="Adotado"
                type="radio"
                v-model="data.status"
                name="status"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="specie1">Adotado</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                value="Adoção"
                v-model="data.status"
                type="radio"
                name="status"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="specie2">Adoção</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input
                value="Perdido"
                v-model="data.status"
                type="radio"
                name="status"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="specie2">Perdido</label>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <input v-model="data.name" type="text" class="form-control" placeholder="Nome" />
            </div>
            <div class="form-group col-md-6">
              <input v-model="data.breed" type="text" class="form-control" placeholder="Raça" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-4">
              <input
                v-model="data.size"
                type="text"
                class="form-control"
                placeholder="Tamanho (cm)"
              />
            </div>
            <div class="form-group col-md-4">
              <input v-model="data.weight" type="text" class="form-control" placeholder="Peso (kg)" />
            </div>
            <div class="form-group col-md-4">
              <input v-model="data.age" type="date" class="form-control" placeholder="Idade (anos)" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                v-model="data.personality[0]"
                type="text"
                class="form-control"
                placeholder="Brincalhão (0-100)"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                v-model="data.personality[1]"
                type="text"
                class="form-control"
                placeholder="Divertido (0-100)"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input
                v-model="data.personality[2]"
                type="text"
                class="form-control"
                placeholder="Engraçado (0-100)"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                v-model="data.personality[3]"
                type="text"
                class="form-control"
                placeholder="Travesso (0-100)"
              />
            </div>
          </div>

          <div class="form-group">
            <textarea
              v-model="data.description"
              class="form-control form-textarea"
              placeholder="Pequena descrição do animal"
              rows="3"
            ></textarea>
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
  data() {
    return {
      format: "2017-07-04"
    };
  },
  methods: {
    submitData() {
      const { data, post } = this;

      if (post) {
        axios
          .post(
            url + "/animal/create",
            {
              breed: data.breed,
              type: data.type,
              weight: data.weight,
              size: data.size,
              age: data.age,
              status: data.status,
              description: data.description,
              personality: data.personality
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` }
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
              breed: data.name,
              type: data.name,
              weight: data.name,
              size: data.name,
              age: data.name,
              status: data.name,
              description: data.name,
              personality: data.personality
            },
            {
              headers: { "bearer token": localStorage.token }
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
  }
};
</script>

<style scoped>
@import "/css/dashboard.css";
</style>
