<template>
  <a class="RecentPostsListItem w-auto"
     :href="recentPosts.path"
  >
    <figure class="w-full">
      <img class="object-fit max-w-full h-auto rounded-lg"
           :src="recentPosts.thumbnail"
      >
    </figure>
    <h2 class="RecentPostsListItem__title text-lg font-semibold mt-6 line-clamp-1">
      {{ recentPosts.title }}
    </h2>
    <p class="mt-2 line-clamp-3">
      <nuxt-content :document="{ body: recentPosts.excerpt }" />
    </p>
  </a>
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
  cursor: pointer

  &:hover
    .RecentPostsListItem__title
      color: $link-color

  @apply transition duration-200
</style>
