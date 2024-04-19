<template>
  <img class="postImage" :src="source" :alt="alt" />
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    source: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .postImage {
    width: 100%;
    object-fit: cover;
    min-height: 230px;
    max-height: 300px;

    @media screen and (min-width: 768px) {
      height: 230px;
    }

    @media screen and (min-width: 1024px) {
      height: 300px;
    }
  }
</style>
