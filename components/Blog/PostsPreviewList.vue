<template>
  <div class="PostsList">
    <ul>
      <li
        v-for="(post, index) in postsList"
        :key="`blog-post-${index}`"
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

import { BlogPost } from '@/types.d';

export default defineComponent({
  name: 'PostsList',
  components: {
    PostsPreviewListItem,
  },
  props: {
    postsList: {
      type: [] as PropType<BlogPost[]>,
      default: () => ([] as BlogPost[]),
    },
  },
});
</script>
