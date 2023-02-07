<script>
import axios from "axios";
import { store } from "../store";
import ProjectCard from "../components/ProjectCard.vue";
export default {
  name: "TypeFilteredList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store
    };
  },
  methods:{
    getType(){
      axios
      .get(`http://localhost:8000/api/types/${this.$route.params.slug}`)
      .then((response) => {
        this.store.type = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
      });
    }
  },
  created() {
    this.getType();
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        this.getType();
      }
    )
  },
};
</script>

<template>
  <section class="my-4">
    <h2 class="my-4">{{ store?.type.name }} Projects</h2>
    <div class="row g-4">
      <div class="col-4" v-for="project in store?.type.projects">
        <ProjectCard :info="project" :type="store.type.name"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h2 {
  color: white;
}
</style>
