<template>
  <div>
    <UiPageHeader main
                  highlight
                  title="Blog."
    />
    <div class="mt-10">
      <UiLoadingContentWrapper :is-loading="isLoadingPosts">
        <PostsPreviewList :posts-list="posts" />
        <UiPagination v-if="!isPostsEmpty" />
      </UiLoadingContentWrapper>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useContext, watch,
} from '@nuxtjs/composition-api';

import UiPagination from '@/components/Shared/Ui/UiPagination.vue';
import UiPageHeader from '@/components/Shared/Ui/UiPageHeader.vue';
import UiLoadingContentWrapper from '@/components/Shared/Ui/UiLoadingContentWrapper.vue';
import PostsPreviewList from '@/components/Blog/PostsPreviewList.vue';

import { useBlog } from '@/composables';

export default defineComponent({
  components: {
    UiPagination,
    UiPageHeader,
    UiLoadingContentWrapper,
    PostsPreviewList,
  },
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
