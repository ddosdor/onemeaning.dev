<template>
  <div class="PostsPreviewListPagination">
    <button @click="previousPage">
      Previous page
    </button>
    <button @click="goToNextPage">
      Next page
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRouter, useRoute } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PostsPreviewListPagination',
  setup() {
    const router = useRouter();
    const route = useRoute();

    function goToNextPage() {
      const { page } = route.value.query;
      router.push({
        query: {
          ...route.value.query,
          page: String(Number(page) + 1),
        },
      });
    }

    function previousPage() {
      const { page } = route.value.query;
      router.push({
        query: {
          ...route.value.query,
          page: String(Number(page) - 1),
        },
      });
    }

    return {
      goToNextPage,
      previousPage,
    };
  },
});
</script>

<style lang="sass" scoped>
.PostsPreviewListPagination
  // component style
</style>
