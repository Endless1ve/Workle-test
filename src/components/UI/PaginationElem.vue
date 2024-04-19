<template>
  <li class="elem"><slot></slot></li>
</template>

<script setup></script>

<style lang="scss" scoped>
  .elem {
    cursor: pointer;
    transition: opacity 0.2s ease;
    font-size: 18px;
  }

  @media (hover: hover) {
    .elem:hover {
      opacity: 0.5;
    }

    .noHover:hover {
      opacity: 1;
      cursor: default;
    }
  }

  .active {
    font-size: 28px;
  }
</style>
