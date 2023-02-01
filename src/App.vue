<script>
import { store } from "./store";
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.store.projects = response.data;
    });
  },
};
</script>

<template>
  <div class="container">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
@import "./style/global.scss";
body {
  background-image: url(./assets/sfondo-legno-nero-65195_1080x675.jpg);
  background-size: cover;
}
</style>
