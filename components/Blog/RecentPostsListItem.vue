<template>
  <nuxt-link class="RecentPostsListItem w-auto"
             :to="recentPost.path"
             data-aos="fade-in-up"
  >
    <SharedUiImage :src="recentPost.thumbnail"
                   custom-class="object-fit max-w-full h-auto rounded-lg"
                   :title="recentPost.title"
                   :alt="recentPost.title"
                   width="675px"
                   height="380px"
    />
    <h2 class="RecentPostsListItem__title text-lg font-semibold mt-6 line-clamp-1">
      {{ recentPost.title }}
    </h2>
    <p class="mt-2 line-clamp-3">
      <nuxt-content :document="{ body: recentPost.excerpt }" />
    </p>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { BlogPostType } from '@/utils/types';

export default defineComponent({
  name: 'RecentPostsListItem',
  props: {
    recentPost: {
      type: Object as PropType<BlogPostType>,
      default: {} as BlogPostType,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
.RecentPostsListItem
  &:hover
    .RecentPostsListItem__title
      color: $link-color

  .RecentPostsListItem__title
    @apply transition duration-200 ease-in-out

  @apply cursor-pointer
</style>
