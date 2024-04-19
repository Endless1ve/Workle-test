<template>
  <ul class="pagination">
    <PaginationElem @click="goToPage(1)" v-if="currentPage > 2">
      1
    </PaginationElem>

    <PaginationElem class="noHover" v-if="currentPage > 3 && totalPages > 4">
      ...
    </PaginationElem>

    <PaginationElem
      v-for="page in visiblePages"
      :key="page"
      @click="goToPage(page)"
      :class="{ active: currentPage === page }">
      {{ page }}
    </PaginationElem>

    <PaginationElem
      class="noHover"
      v-if="currentPage < totalPages - 2 && totalPages > 4">
      ...
    </PaginationElem>

    <PaginationElem
      @click="goToPage(totalPages)"
      v-if="currentPage < totalPages - 1">
      {{ totalPages }}
    </PaginationElem>
  </ul>
</template>

<script setup>
  import { computed, defineProps, defineEmits } from "vue";
  import PaginationElem from "@/components/UI/PaginationElem.vue";
  const props = defineProps({
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  });
  const visiblePages = computed(() => {
    const pages = [];
    let startPage, endPage;

    if (props.currentPage === 1) {
      startPage = 1;
      endPage = Math.min(3, props.totalPages);
    } else if (props.currentPage === props.totalPages) {
      startPage = Math.max(1, props.totalPages - 2);
      endPage = props.totalPages;
    } else {
      startPage = Math.max(1, props.currentPage - 1);
      endPage = Math.min(props.totalPages, props.currentPage + 1);
    }

    if (props.currentPage === 1 && endPage === 3) {
      endPage = 3;
    } else if (
      props.currentPage === props.totalPages &&
      startPage === props.totalPages - 2
    ) {
      startPage = props.totalPages - 2;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  });

  const emit = defineEmits(["updatePage"]);

  const goToPage = (page) => {
    emit("updatePage", page);
  };
</script>

<style lang="scss" scoped>
  .pagination {
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 60px;
    background-color: $pagination-background;
    color: $light-text-color;
    gap: 10px;
    @include flex-row;
  }
</style>
