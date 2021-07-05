<template>
  <div>
    <PostsPreviewList
      :posts-list="posts"
    />
    <PostsPreviewListPagination />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PostsPreviewList from '@/components/Blog/PostsPreviewList.vue';
import PostsPreviewListPagination from '@/components/Blog/PostsPreviewListPagination.vue';

import { BlogPost } from '@/types.d';

export default defineComponent({
  components: {
    PostsPreviewList,
    PostsPreviewListPagination,
  },
  async asyncData({ $content, query }) {
    const { page } = query;
    const skip = (2 - 1) * Number(page);
    const posts = await $content('blog')
      .only(['title', 'date', 'excerpt', 'tags', 'path'])
      .sortBy('date', 'desc')
      .skip(skip)
      .limit(2)
      .fetch<BlogPost>();
    return { posts };
  },
  watchQuery: ['page'],
});
</script>
