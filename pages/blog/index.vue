<template>
  <div>
    <UiPageHeader main
                  highlight
                  title="Blog."
    />
    <PostsPreviewList :posts-list="posts" />
    <UiPagination v-if="!isPostsEmpty" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useContext, watch,
} from '@nuxtjs/composition-api';

import UiPagination from '@/components/Shared/Ui/UiPagination.vue';
import UiPageHeader from '@/components/Shared/Ui/UiPageHeader.vue';
import PostsPreviewList from '@/components/Blog/PostsPreviewList.vue';

import { useBlog } from '@/composables';

export default defineComponent({
  components: {
    UiPagination,
    UiPageHeader,
    PostsPreviewList,
  },
  setup() {
    const { query } = useContext();
    const { posts, isPostsEmpty, getPosts } = useBlog();

    watch(
      () => query.value?.page,
      () => getPosts(),
      { immediate: true },
    );

    return {
      posts,
      isPostsEmpty,
    };
  },
});
</script>
