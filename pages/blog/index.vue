<template>
  <div>
    <SharedUiPageHeader main
                        highlight
                        title="Blog."
    />
    <div class="mt-10">
      <SharedUiLoadingContentWrapper :is-loading="isLoadingPosts">
        <LazyBlogPostsPreviewList v-if="!isPostsEmpty"
                                  :posts-list="posts"
        />
        <LazySharedUiPagination v-if="!isPostsEmpty" />
      </SharedUiLoadingContentWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useContext, watch,
} from '@nuxtjs/composition-api';

import { useBlog } from '@/composables/useBlog';

export default defineComponent({
  setup() {
    const { query } = useContext();
    const {
      posts, isPostsEmpty, isLoadingPosts, getPosts,
    } = useBlog();

    watch(
      () => query.value?.page,
      () => getPosts(),
      { immediate: true },
    );

    return {
      posts,
      isPostsEmpty,
      isLoadingPosts,
    };
  },
});
</script>
