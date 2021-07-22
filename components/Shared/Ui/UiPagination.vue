<template>
  <div class="UiPagination">
    <button @click="() => { previousPage(); emitChangePage(); }">
      Previous page
    </button>
    <button @click="() => { nextPage(); emitChangePage(); }">
      Next page
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { usePagination } from '@/composables/usePagination';

export default defineComponent({
  name: 'PostsPreviewListPagination',
  emits: ['changePage'],
  setup(props, { emit }) {
    const { nextPage, previousPage } = usePagination();

    function emitChangePage() {
      emit('changePage');
    }

    return {
      emitChangePage,
      nextPage,
      previousPage,
    };
  },
});
</script>
