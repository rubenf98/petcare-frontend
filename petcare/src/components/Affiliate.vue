<template>
  <div>
    <Header title="Afiliados" description="Nossos parceiros" image="background-red"></Header>
    Affiliate ID is: {{ $route.params.id }}
  </div>
</template>
<script>
import Header from "./layout/Header.vue";

export default {
  name: "affiliate",
  components: {
    Header
  }
};
</script>

<style >

</style>
