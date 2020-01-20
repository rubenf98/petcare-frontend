<template>
  <div class="modal fade" id="eventsModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered dashboard-modal" role="document">
      <div class="modal-content form-background">
        <div class="modal-header">
          <h4 class="modal-title">Formulário</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <input v-model="data.title" type="text" class="form-control" placeholder="Nome" />
            </div>

            <div class="form-group">
              <textarea
                v-model="description"
                class="form-control form-textarea"
                placeholder="Pequena descrição da notícia"
                rows="3"
              ></textarea>
            </div>

            <div v-if="!data.title" class="form-group">
              <input type="file" name="image" id />
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
      title: null,
      description: null
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      const vm = this;
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
