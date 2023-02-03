<script>
export default {
  name: "ProjectsCard",
  props: {
    info: Object,
  },
  methods: {
    truncateText(text) {
      return text.substring(0, 75) + "...";
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      v-if="info.image_url"
      :src="info.image_url"
      class="card-img-top"
      :alt="info.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ info.name }}</h5>
      <span class="badge bg-secondary mb-3" v-if="info.type">{{ info.type.name }}</span>
      <span
        class="badge bg-primary mb-3 mx-2" v-if="info.technologies"
        v-for="technology in info.technologies"
        >{{ technology.name }}</span
      >
      <p class="card-text my-3">
        {{ truncateText(info.description) }}
      </p>
      <router-link
        :to="{ name: 'single-project', params: { slug: info.slug } }"
        class="btn btn-primary"
        >Details</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  img {
    max-height: 14rem;
  }
}
</style>
