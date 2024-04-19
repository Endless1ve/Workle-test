<template>
  <div class="views">
    <p class="viewsValue">{{ views }}</p>
    <img
      src="@/assets/images/Eye.svg"
      alt="Иконка глаза, олицетворяющая количество просмотров"
      class="viewsImage" />
  </div>
</template>

<script setup>
  import { ref, defineProps, onMounted } from "vue";
  import axios from "axios";

  const props = defineProps({
    postId: {
      type: [String, Number],
      required: true,
    },
  });

  const views = ref(0);

  const fetchViews = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/${props.postId}/statistics`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.VUE_APP_API_KEY}`,
          },
        }
      );
      views.value = response.data.views.total;
    } catch (error) {
      console.log(error);
    }
  };
  onMounted(() => {
    fetchViews();
  });
</script>

<style lang="scss" scoped>
  .views {
    @include flex-row;
    justify-content: flex-end;
    gap: 0 5px;
    margin-top: 10px;
    padding-left: 10px;
  }

  .viewsValue {
    font-weight: 700;
    font-size: 12px;
    line-height: 117%;
    color: $additional-text-color;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }
</style>
