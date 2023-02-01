<script>
export default {
  name: "ProjectsCard",
  props: {
    info: Object,
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
      <h4 class="card-title">{{ info.name }}</h4>
      <p class="card-text">
        {{ info.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
