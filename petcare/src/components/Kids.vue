<template>
  <div class="background">
    <div class="kids-header">
      <Header size="500" image="background-kids.png"></Header>
      <div id="kids-carousel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="/kids/carousel1.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/kids/carousel2.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="/kids/carousel3.webp" alt="Third slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#kids-carousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#kids-carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div class="container margin">
      <div v-for="(animal, index) in animals" v-bind:key="animal.id">
        <div v-if="index % 2 != 0" class="row">
          <div class="col-lg-8">
            <img
              src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
              class="animal-img animal-left"
            />
          </div>
          <div class="animal-info col-lg-4">
            <h5 class="card-title">{{animal.name}}</h5>
            <div class="progress-container">
              <div class="progress-item">
                <h3 class="progress-title">Brincalhão</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-animated progress-bar-striped bg-success"
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress-item">
                <h3 class="progress-title">Divertido</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-animated progress-bar-striped bg-info"
                    role="progressbar"
                    style="width: 75%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress-item">
                <h3 class="progress-title">Engraçado</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-animated progress-bar-striped bg-warning"
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div class="progress-item">
                <h3 class="progress-title">Travesso</h3>
                <div class="progress">
                  <div
                    class="progress-bar progress-bar-animated progress-bar-striped bg-danger"
                    role="progressbar"
                    style="width: 95%"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="index % 2 == 0" class="row">
          <div v-if="index % 2 == 0" class="order-lg-2 col-lg-8 order-xl-2">
            <img
              src="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"
              class="animal-img animal-right"
            />
          </div>
          <div class="animal-info order-lg-1 col-lg-4 order-xl-1">
            <h5 class="card-title">{{animal.name}}</h5>
            <div class="progress-item">
              <h3 class="progress-title">Brincalhão</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-animated progress-bar-striped bg-success"
                  role="progressbar"
                  style="width: 80%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-item">
              <h3 class="progress-title">Divertido</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-animated progress-bar-striped bg-info"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-item">
              <h3 class="progress-title">Engraçado</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-animated progress-bar-striped bg-warning"
                  role="progressbar"
                  style="width: 90%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div class="progress-item">
              <h3 class="progress-title">Travesso</h3>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-animated progress-bar-striped bg-danger"
                  role="progressbar"
                  style="width: 95%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-background"></div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./layout/Header.vue";

export default {
  name: "homepage",
  components: {
    Header
  },
  data() {
    return {
      animals: null
    };
  },
  created: function() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.animals = res.data;
    });
  }
};
</script>

<style scoped>
.kids-header {
  position: relative;
  margin-bottom: 3%;
}
.carousel {
  width: 50%;
  position: absolute;
  top: 180px;
  left: 0;
  right: 0;
  margin: auto;
}
.container {
  padding-top: 5%;
}
.row {
  margin: 10% auto;
}

.animal-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Courgette", cursive;
  text-align: center;
}

.card-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 5%;
}

.progress-title {
  text-align: left;
  font-size: 1.3em;
}

.nav-link {
  color: white;
}

.progress {
  height: 20px;
}

.animal-img {
  width: 100%;
  border-radius: 10px;
  border: 5px outset rgba(0, 204, 255, 0.452);
}

.animal-left {
  border-radius: 0px 40px 0px 40px;
}

.animal-right {
  border-radius: 40px 0px 40px 0px;
}

.bottom-background {
  height: 400px;
  background-image: url("https://i.ya-webdesign.com/images/grass-clipart-mountain-1.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.background {
  background: linear-gradient(
    top,
    rgba(255, 255, 255) 0%,
    rgb(255, 237, 237) 100%
  );
}

@media only screen and (max-width: 1600px) {
  .carousel {
    top: 210px;
  }
}

@media only screen and (max-width: 1250px) {
  .carousel {
    width: 60%;
  }
}

@media only screen and (max-width: 992px) {
  .carousel {
    width: 70%;
    top: 220px;
  }
}

@media only screen and (max-width: 850px) {
  .carousel {
    top: 250px;
  }
}

@media only screen and (max-width: 768px) {
  .carousel {
    top: 150px;
  }
}

@media only screen and (max-width: 576px) {
  .carousel {
    width: 80%;
    top: 180px;
  }
  .kids-header {
    margin-bottom: 5%;
  }
}

@media only screen and (max-width: 450px) {
  .carousel {
    width: 95%;
    top: 220px;
  }
  .kids-header {
    margin-bottom: 10%;
  }
}
</style>