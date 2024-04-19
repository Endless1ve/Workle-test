<template>
  <div class="list">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
    <PreloaderBlock v-if="isLoading" />
    <PaginationItem
      :totalPages="limitPages"
      :currentPage="currentPage"
      @updatePage="updatePage" />
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";

  import PostItem from "@/components/PostItem.vue";
  import PaginationItem from "@/components/PaginationItem.vue";
  import PreloaderBlock from "@/components/PreloaderBlock.vue";

  const posts = ref([]);

  const currentPage = ref(1);
  const limitPages = ref(59);
  const limit = 10;

  const isLoading = ref(false);

  const fetchPosts = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.VUE_APP_API_KEY}`,
        },
        params: {
          page: currentPage.value,
          per_page: limit,
        },
      });
      posts.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const updatePage = (page) => {
    currentPage.value = page;
    fetchPosts();
  };

  onMounted(() => {
    fetchPosts();
  });
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
