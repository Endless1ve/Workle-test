<template>
  <div class="profile" @click="routeToProfile">
    <div class="profileImage">
      <UserImage :source="user.profile_image.medium" :alt="user.username" />
    </div>
    <div class="profileInfo">
      <p class="profileName">{{ user.name }}</p>
      <p class="profileUsername">@{{ user.username }}</p>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";
  import { useRouter } from "vue-router";
  import UserImage from "@/components/UI/UserImage.vue";

  const props = defineProps({
    user: {
      type: Object,
      required: true,
    },
  });

  const router = useRouter();

  const routeToProfile = () => {
    router.push({
      name: "profile",
      params: { username: props.user.username },
    });
  };
</script>

<style lang="scss" scoped>
  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 10px;
  }

  @media (hover: hover) {
    .profile:hover {
      cursor: pointer;

      .profileInfo {
        text-decoration: underline dashed $additional-text-color;
      }

      .profileName {
        text-decoration: underline dashed $main-text-color;
      }
    }
  }

  .profileImage {
    width: 30px;

    @media screen and (min-width: 1024px) {
      width: 50px;
    }
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
