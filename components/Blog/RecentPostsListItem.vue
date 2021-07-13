<template>
  <div class="RecentPostsListItem w-auto">
    <figure>
      <img class="object-contain md:object-scale-down"
           :src="recentPosts.thumbnail"
      >
    </figure>
    <div>{{ recentPosts.title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { BlogPostType } from '@/utils/types';

export default defineComponent({
  name: 'RecentPostsListItem',
  props: {
    recentPosts: {
      type: Object as PropType<BlogPostType>,
      default: {} as BlogPostType,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
.RecentPostsListItem
  // component style
</style>
