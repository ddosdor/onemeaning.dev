<template>
  <div>
    <PostsPreviewList :posts-list="posts" />
    <PostsPreviewListPagination />
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useAsync, useContext, watch,
} from '@nuxtjs/composition-api';
import PostsPreviewList from '@/components/Blog/PostsPreviewList.vue';
import PostsPreviewListPagination from '@/components/Blog/PostsPreviewListPagination.vue';
import { useBlog } from '@/composables';

export default defineComponent({
  components: {
    PostsPreviewList,
    PostsPreviewListPagination,
  },
  setup() {
    const { query } = useContext();
    const { posts, getPosts } = useBlog();

    watch(
      () => query.value?.page,
      () => useAsync(() => getPosts()),
      { immediate: true },
    );

    return {
      posts,
    };
  },
});
</script>
