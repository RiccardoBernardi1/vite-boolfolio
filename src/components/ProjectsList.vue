<script>
import { store } from "../store";
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "ProjectsList",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <h2 class="my-4">Projects List</h2>
    <div class="row g-4">
      <div class="col-4" v-for="project in store.projects">
        <ProjectCard :info="project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
