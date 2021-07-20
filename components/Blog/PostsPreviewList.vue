<template>
  <div class="PostsList">
    <ul>
      <li
        v-for="(post, index) in postsList"
        :key="`blog-post-${index}`"
        class="mb-20"
      >
        <BlogPostsPreviewListItem :post="post"
                                  :index="index"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, PropType,
} from '@nuxtjs/composition-api';

import { BlogPostType } from '@/utils/types';

export default defineComponent({
  name: 'PostsList',
  props: {
    postsList: {
      type: [] as PropType<BlogPostType[]>,
      default: () => ([] as BlogPostType[]),
    },
  },
});
</script>
