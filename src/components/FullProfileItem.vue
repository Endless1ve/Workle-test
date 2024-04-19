<template>
  <div class="content">
    <PreloaderBlock v-if="isLoading" />
    <ErrorItem v-else-if="isError" />
    <div class="profile" v-else>
      <div class="image">
        <UserImage
          v-if="user.profile_image"
          :source="user.profile_image.large"
          :alt="user.username" />
      </div>
      <div class="profileInfo">
        <p class="profileName">{{ user.name }}</p>
        <p v-if="user.bio" class="profileBio">{{ user.bio }}</p>
        <p v-else class="profileUsername">{{ "@" + user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios";

  import UserImage from "@/components/UI/UserImage.vue";
  import PreloaderBlock from "@/components/PreloaderBlock.vue";
  import ErrorItem from "@/components/UI/ErrorItem.vue";

  const route = useRoute();
  const username = route.params.username;

  const user = ref({});

  const isLoading = ref(false);
  const isError = ref(false);

  const fetchUser = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get(
        `https://api.unsplash.com/users/${username}`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.VUE_APP_API_KEY}`,
          },
        }
      );
      user.value = response.data;
    } catch (error) {
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(() => {
    fetchUser();
  });
</script>

<style lang="scss" scoped>
  .profile {
    gap: 20px;
    padding: 20px;
    @include flex-column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 480px) {
      @include flex-row;
    }
  }

  .image {
    width: 150px;
  }

  .profileInfo {
    @include flex-column;
    justify-content: center;
    gap: 10px;
  }

  .profileName {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;

    @media screen and (min-width: 480px) {
      text-align: left;
    }
  }

  .profileBio {
    max-width: 400px;
    text-align: center;

    @media screen and (min-width: 480px) {
      text-align: left;
    }
  }
</style>
