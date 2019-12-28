<template>
  <div class="container h-100 margin">
    <div class="d-flex justify-content-center">
      <form action="/perdidos" method="get" class="searchbar">
        <input class="search_input" type="text" name="search" placeholder="Search..." />
      </form>
    </div>
  </div>
</template>

<style scoped>
.margin {
  margin-bottom: 5%;
}

.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  width: 40%;
  border: 2px solid gray;
  min-width: 200px;
}

.search_input {
  color: gray;
  width: 100%;
  border: 0;
  outline: 0;
  background: none;
  padding: 0 15px;
  caret-color: gray;
}
</style>

<script>
export default {
  name: "search"
};
</script>
