<template>
  <div>
    <SharedUiPageHeader main
                        highlight
                        title="Blog."
    />
    <div class="mt-10">
      <SharedUiLoadingContentWrapper :is-loading="isLoading"
                                     animation="none"
      >
        <LazyBlogPostsPreviewList v-if="!isPostsEmpty"
                                  :key="isLoading"
                                  :posts-list="posts"
        />
        <LazySharedUiPagination v-if="!isPostsEmpty"
                                @changePage="fixPagePosition"
        />
      </SharedUiLoadingContentWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useContext, ref, computed, watch,
} from '@nuxtjs/composition-api';

import { useBlog } from '@/composables/useBlog';

export default defineComponent({
  setup() {
    const { query } = useContext();
    const {
      posts, isPostsEmpty, isLoadingPosts, getPosts,
    } = useBlog();
    const fakeLoading = ref<Boolean>(false);

    watch(
      () => query.value?.page,
      () => getPosts(),
      { immediate: true },
    );

    function fixPagePosition() {
      fakeLoading.value = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        fakeLoading.value = false;
      }, 1500);
    }

    return {
      posts,
      isPostsEmpty,
      isLoading: computed(() => isLoadingPosts.value || fakeLoading.value),
      fixPagePosition,
    };
  },
});
</script>
