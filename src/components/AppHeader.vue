<script>
import HeaderNav from "./HeaderNav.vue";
export default {
  name: "AppHeader",
  components: {
    HeaderNav,
  },
};
</script>

<template>
  <header>
    <h1 class="text-center fw-bold my-4">Vite Boolfolio</h1>
    <HeaderNav />
  </header>
</template>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
