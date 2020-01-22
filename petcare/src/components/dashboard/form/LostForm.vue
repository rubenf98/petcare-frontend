<template>
  <div class="lost-form">
    <form class="form">
      <div class="form-row">
        <div class="form-group col-sm-4">
          <input required type="text" class="form-control" placeholder="Nome" />
        </div>
        <div class="form-group col-sm-4">
          <input required type="text" class="form-control" placeholder="Localização" />
        </div>
        <div class="form-group col-sm-4">
          <input required type="date" class="form-control" placeholder="Data" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-sm-6">
          <input type="email" class="form-control" placeholder="Email" />
        </div>
        <div class="form-group col-sm-6">
          <input
            type="tel"
            pattern="(^291[0-9]{6})|(^9{1}[0-9]{8})"
            class="form-control"
            placeholder="Contacto"
          />
        </div>
      </div>

      <div class="form-group">
        <textarea required class="form-control" placeholder="Descrição" rows="2"></textarea>
      </div>
      <center>
        <button type="submit" class="btn btn-light">Submit</button>
      </center>
    </form>
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
  }
};
</script>

<style scoped>
.lost-form {
  position: absolute;
  top: 250px;
  left: 0;
  right: 0;
  margin: auto;
  @apply --container;
  max-width: 700px;
}
.btn {
  padding: 1% 10%;
}
.form {
  background: rgba(0, 0, 0, 0.5);
  padding: 2%;
}
</style>
