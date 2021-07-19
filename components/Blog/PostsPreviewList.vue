<template>
  <div class="PostsList">
    <ul>
      <li
        v-for="(post, index) in postsList"
        :key="`blog-post-${index}`"
        class="mb-12"
      >
        <PostsPreviewListItem :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType,
} from '@nuxtjs/composition-api';
import PostsPreviewListItem from '@/components/Blog/PostsPreviewListItem.vue';

import { BlogPostType } from '@/utils/types';

export default defineComponent({
  name: 'PostsList',
  components: {
    PostsPreviewListItem,
  },
  props: {
    postsList: {
      type: [] as PropType<BlogPostType[]>,
      default: () => ([] as BlogPostType[]),
    },
  },
});
</script>
