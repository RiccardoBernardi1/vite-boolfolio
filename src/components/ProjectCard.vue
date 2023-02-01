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
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ info.name }}</h4>
      <p class="card-text">
        {{ info.description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
