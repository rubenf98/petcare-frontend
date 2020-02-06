<template>
  <div class="modal fade" id="userModal" role="dialog">
    <div class="modal-dialog modal-dialog-centered dashboard-modal" role="document">
      <div class="modal-content form-background">
        <div class="modal-header">
          <h4 class="modal-title">Formulário</h4>
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <input v-model="data.name" type="text" class="form-control" placeholder="Nome" />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <input v-model="data.email" type="email" class="form-control" placeholder="Email" />
            </div>
            <div class="form-group col-md-6">
              <input
                type="tel"
                class="form-control"
                placeholder="Telefone"
                pattern="(^291[0-9]{6})|(^9{1}[0-9]{8})"
                name="phone"
                v-model="data.phone"
              />
            </div>
          </div>

          <div class="form-group">
            <input
              id="iban"
              v-model="data.iban"
              type="text"
              name="iban"
              class="form-control"
              pattern="^PT\d{2}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{4}[ ]\d{2}|DE\d{20}$"
              placeholder="IBAN"
            />
          </div>

          <div class="form-group">
            <input
              v-model="data.address"
              type="text"
              name="address"
              class="form-control"
              placeholder="Morada"
            />
          </div>

          <div class="form-group">
            <textarea
              v-model="data.description"
              class="form-control form-textarea"
              placeholder="Pequena descrição da notícia"
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
      name: null,
      description: null,
      email: null,
      phone: null,
      address: null,
      iban: null
    };
  },
  methods: {
    submitData() {
      const { data, post } = this;

      if (post) {
        axios
          .post(
            url + "/users",
            {
              name: data.name,
              description: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              iban: data.iban
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` }
            }
          )
          .then(function(res) {
            location.reload();
          })
          .catch(function(e) {
            console.log("error");
          });
      } else {
        axios
          .put(
            url + "/users/" + data.id,
            {
              name: data.name,
              description: data.name,
              email: data.email,
              phone: data.phone,
              address: data.address,
              iban: data.iban
            },
            {
              headers: { Authorization: `Bearer ${localStorage.token}` }
            }
          )
          .then(function(res) {
            location.reload();
          })
          .catch(function(e) {
            console.log("error");
          });
      }
    }
  },
  mounted() {
    document.getElementById("iban").addEventListener("input", function(e) {
      var target = e.target,
        position = target.selectionEnd,
        length = target.value.length;

      target.value = target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      target.selectionEnd = position +=
        target.value.charAt(position - 1) === " " &&
        target.value.charAt(length - 1) === " " &&
        length !== target.value.length
          ? 1
          : 0;
    });
  }
};
</script>

<style scoped>
@import "/css/dashboard.css";
</style>
