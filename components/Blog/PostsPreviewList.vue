<template>
  <ul class="PostsList">
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

<style lang="sass" scoped>
.PostsList
  li:nth-child(even)
    @apply animate-fade-in-right
  li:nth-child(odd)
    @apply animate-fade-in-left
</style>
