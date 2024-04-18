<template>
  <article class="post">
    <ProfileItem :user="post.user" />
  </article>
</template>

<script setup>
  import { defineProps } from "vue";

  import ProfileItem from "@/components/ProfileItem.vue";

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
