<template>
  <div
    class="modal fade"
    id="exampleModalCenter"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <div class="card">
            <img
              src="https://static.boredpanda.com/blog/wp-content/uploads/2019/07/funny-exotic-long-hair-cat-zuu-fb9-png__700.jpg"
              class="card-img-top"
            />
            <div class="card-body">
              <div class="mb-0 d-flex justify-content-between align-items-center">
                <h3 class="mb-0">{{animal.name}}</h3>
                <span class="badge badge-pill badge-info">Adoção</span>
              </div>
              <p>
                  <small class="mb-3 text-muted">Labrador, Canil Municipal do Funchal</small>
              </p>
              

              <div class="d-flex justify-content-around">
                <div class>
                  <p class="mb-0 data data-number">3kg</p>
                  <p class="data data-text">Peso</p>
                </div>

                <div class>
                  <p class="mb-0 data data-number">7</p>
                  <p class="data data-text">Idade</p>
                </div>
                <div class>
                  <p class="mb-0 data data-number">22cm</p>
                  <p class="data data-text">Tamanho</p>
                </div>
              </div>

              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio similique consectetur molestias, placeat officia esse ducimus obcaecati nisi non omnis minima distinctio perferendis quibusdam quod quas pariatur, porro blanditiis impedit?</p>
            </div>

            <a
              class="btn btn-primary d-flex align-items-center justify-content-center"
              href="/logo.png"
              download="logo.png"
            >
              <img src="/icon/download.svg" class="icon" />
              <span>Registo Médico</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "animalProfile",
  props: {
    animal: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 100%;
  border: none;
  margin: 0;
}
.modal-body {
  width: 100%;

  padding: 0;
  position: relative;
}
.modal-dialog {
  max-width: 400px;
}
.close {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1;
}
.icon {
  width: 15px;
  height: 15px;
  margin-right: 1%;
}

.data {
  text-align: center;
}

.data-number {
  color: black;
  font-weight: bold;
}

.data-text {
  color: gray;
  font-size: 0.9em;
}
</style>
