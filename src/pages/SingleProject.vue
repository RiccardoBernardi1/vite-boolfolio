<template>
  <h2 class="my-4">
    {{ project?.name }}
    <span class="badge bg-secondary mb-3 mx-2">{{ project.type?.name }}</span>
    <span
      class="badge bg-primary mb-3 mx-2"
      v-for="technology in project.technologies"
      >{{ technology.name }}</span
    >
  </h2>
  <img :src="project.image_url" :alt="project.name" class="mb-4" />
  <p>{{ project.description }}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleProject",
  data() {
    return {
      project: {},
    };
  },
  created() {
    axios
      .get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
      .then((response) => {
        this.project = response.data;
      })
      .catch((err) => {
        console.log(err);
        this.$router.push({ name: "page-404" });
      });
  },
};
</script>

<style lang="scss" scoped>
* {
  color: white;
  img {
    min-width: 100%;
    max-height: 30rem;
  }
}
</style>
