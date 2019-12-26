<template>
  <div :style="style" class="jumbotron jumbotron-fluid homepage">
    <div class="container">
      <h1 class="display-4">{{title}}</h1>
      <p class="lead">{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    style() {
      return "background-image: url(/background/" + this.image + ".svg)";
    }
  },
  props: ["title", "description", "image"]
};
</script>

<style scoped>
.jumbotron {
  height: 350px;
  background-image: url("/background/{{image}}.svg");
  background-attachment: fixed;
  background-size: cover;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  margin: 0;
}

.display-4,
.lead {
  color: white;
  text-align: center;
}
.display-4 {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 5rem;
}
</style>