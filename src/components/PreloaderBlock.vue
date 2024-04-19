<template>
  <div class="preloaderBlock">
    <PreloaderItem />
  </div>
</template>

<script setup>
  import PreloaderItem from "@/components/UI/PreloaderItem.vue";
</script>

<style lang="scss" scoped>
  .preloaderBlock {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    @include flex-column;
  }
</style>
