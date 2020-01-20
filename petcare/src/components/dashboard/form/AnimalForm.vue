<template>
  <div class="modal fade" id="animalModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered dashboard-modal" role="document">
      <div class="modal-content form-background">
        <div class="modal-header">
          <h4 class="modal-title">Formulário</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="d-flex justify-content-center my-2">
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  value="dog"
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
                  value="cat"
                  v-model="data.type"
                  type="radio"
                  id="specie2"
                  name="specie"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="specie2">Gato</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  value="fish"
                  v-model="data.type"
                  type="radio"
                  id="specie3"
                  name="specie"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="specie3">Peixe</label>
              </div>
            </div>

            <div class="form-group">
              <input v-model="data.name" type="text" class="form-control" placeholder="Nome" />
            </div>
            <div class="form-group">
              <input v-model="data.breed" type="text" class="form-control" placeholder="Raça" />
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
                <input
                  v-model="data.weight"
                  type="text"
                  class="form-control"
                  placeholder="Peso (kg)"
                />
              </div>
              <div class="form-group col-md-4">
                <input
                  v-model="data.age"
                  type="text"
                  class="form-control"
                  placeholder="Idade (anos)"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-3">
                <input
                  v-model="data.personality[0]"
                  type="text"
                  class="form-control"
                  placeholder="Brincalhão (0-100)"
                />
              </div>
              <div class="form-group col-md-3">
                <input
                  v-model="data.personality[1]"
                  type="text"
                  class="form-control"
                  placeholder="Divertido (0-100)"
                />
              </div>
              <div class="form-group col-md-3">
                <input
                  v-model="data.personality[2]"
                  type="text"
                  class="form-control"
                  placeholder="Engraçado (0-100)"
                />
              </div>
              <div class="form-group col-md-3">
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
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JQuery from "jquery";
let $ = JQuery;

export default {
  props: ["data"],
  data() {
    return {
      name: null,
      breed: null,
      type: null,
      weight: null,
      size: null,
      age: null,
      status: null,
      description: null
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      const vm = this;
    }
  }
};
</script>

<style scoped>
@import "/css/dashboard.css";
</style>
