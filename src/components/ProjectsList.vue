<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
export default {
  name: "ProjectsList",
  data() {
    return {
      projects: [],
    };
  },
  components: {
    ProjectCard,
  },
  created() {
    axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
      this.projects = response.data;
    });
  },
};
</script>

<template>
  <section>
    <h2 class="my-4">Projects List</h2>
    <div class="row g-4">
      <div class="col-4" v-for="project in projects">
        <ProjectCard :info="project" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
