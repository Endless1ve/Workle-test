<template>
  <img class="profileImage" :src="source" :alt="'Avatar of user ' + alt" />
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
  .profileImage {
    border: 1px solid $additional-text-color;
    border-radius: 50%;
  }
</style>
