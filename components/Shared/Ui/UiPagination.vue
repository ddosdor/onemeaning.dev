<template>
  <div class="UiPagination grid grid-cols-2 divide-x-2">
    <button class="UiPagination__button app-link"
            :disabled="!hasPreviousPage"
            @click="() => { if (hasPreviousPage) previousPage(); emitChangePage(); }"
    >
      <SharedUiHeroIcon chevron-double-left /> page
    </button>
    <button class="UiPagination__button app-link"
            :disabled="!hasNextPage"
            @click="() => { if (hasNextPage) nextPage(); emitChangePage(); }"
    >
      page <SharedUiHeroIcon chevron-double-right />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api';

import { usePagination } from '@/composables/usePagination';

export default defineComponent({
  name: 'PostsPreviewListPagination',
  props: {
    hasNextPage: Boolean,
  },
  emits: ['changePage'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { emit }) {
    const { nextPage, previousPage, currentPage } = usePagination();

    const hasPreviousPage = computed(() => currentPage.value !== '1');

    function emitChangePage() {
      emit('changePage');
    }

    return {
      currentPage,
      hasPreviousPage,
      emitChangePage,
      nextPage,
      previousPage,
    };
  },
});
</script>

<style lang="sass" scoped>
.UiPagination
  &__button
    @apply font-bold text-lg disabled:opacity-10
</style>
