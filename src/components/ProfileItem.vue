<template>
  <div class="profile">
    <img
      class="profileImage"
      :src="user.profile_image.medium"
      :alt="'Avatar of user' + user.username" />
    <div class="profileInfo">
      <p class="profileName">{{ user.name }}</p>
      <p class="profileUsername">@{{ user.username }}</p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";
  const props = defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
  }

  .profileImage {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .profileInfo {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .profileName {
    font-weight: 700;
    font-size: 12px;
    color: $main-text-color;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  .profileUsername {
    font-weight: 400;
    font-size: 12px;
    color: $additional-text-color;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
</style>
