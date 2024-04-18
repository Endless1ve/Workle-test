<template>
  <div class="list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
  import posts from "../../mocked-posts.json";
  import PostItem from "@/components/PostItem.vue";
</script>

<style lang="scss" scoped>
  .list {
    padding: 0 0 20px 0;
    gap: 10px 20px;
    grid-template-columns: minmax(320px, 440px);
    @include grid-centered;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 320px);
    }

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(2, 440px);
    }
  }
</style>
