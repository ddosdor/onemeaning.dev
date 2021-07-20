<template>
  <div class="UiPagination">
    <button @click="previousPage">
      Previous page
    </button>
    <button @click="nextPage">
      Next page
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { usePagination } from '@/composables/usePagination';

export default defineComponent({
  name: 'PostsPreviewListPagination',
  setup() {
    const { nextPage, previousPage } = usePagination();

    return {
      nextPage,
      previousPage,
    };
  },
});
</script>
