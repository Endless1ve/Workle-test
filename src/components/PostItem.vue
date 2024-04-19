<template>
  <article class="post">
    <ProfileItem :user="post.user" />
    <PostImage :source="post.urls.regular" :alt="post.alt_description" />
    <ViewsItem :postId="post.id" />
  </article>
</template>

<script setup>
  import { defineProps } from "vue";

  import ProfileItem from "@/components/ProfileItem.vue";
  import PostImage from "@/components/UI/PostImage.vue";
  import ViewsItem from "@/components/ViewsItem.vue";

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
