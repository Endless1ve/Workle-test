<template>
  <article class="post"></article>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    post: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .post {
    width: 100%;
  }
</style>
