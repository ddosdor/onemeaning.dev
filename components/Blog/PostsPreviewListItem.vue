<template>
  <nuxt-link class="PostPreviewListItem flex flex-col"
             :class="{
               'lg:flex-row': position === 'even',
               'lg:flex-row-reverse': position === 'odd',
             }"
             :to="post.path"
             :data-aos="position === 'even' ? 'fade-in-left' : 'fade-in-right'"
  >
    <div class="PostPreviewListItem__thumbnail w-full
                lg:w-2/5 lg:flex-none
               "
         :class="{
           'lg:mr-8': position === 'even',
           'lg:ml-8': position === 'odd',
         }"
    >
      <SharedUiImage :src="post.thumbnail"
                     :title="post.title"
                     :alt="post.title"
                     custom-class="object-fit max-w-full h-auto rounded-lg"
                     width="675px"
                     height="380px"
      />
    </div>
    <div class="mt-2 flex flex-col px-2
                lg:px-0
               "
    >
      <div class="flex items-center justify-between">
        <BlogPostAuthor v-if="post.author"
                        :avatar="post.author.avatar"
                        :name="post.author.name"
        />
        <time class="text-sm text-gray-500">{{ formatDate(post.date) }}</time>
      </div>
      <h2 class="mt-4 flex">
        <a :href="post.path"
           class="PostPreviewListItem__title text-lg font-bold w-full
                  md:text-xl
                 "
        >{{ post.title }}</a>
      </h2>
      <p v-if="post.excerpt"
         class="mt-2 line-clamp-3"
      >
        <nuxt-content :document="{ body: post.excerpt }" />
      </p>
    </div>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api';
import { BlogPostType } from '@/utils/types';
import { useHelpers } from '@/composables/useHelpers';

export default defineComponent({
  name: 'PostPreview',
  props: {
    post: {
      type: Object as PropType<BlogPostType>,
      required: true,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { formatDate } = useHelpers();
    const position = computed<String>(() => ((props.index % 2 === 0) ? 'even' : 'odd'));

    return {
      formatDate, position,
    };
  },
});
</script>

<style lang="sass" scoped>
.PostPreviewListItem
  &:hover
    .PostPreviewListItem__title
      color: $link-color

    .PostPreviewListItem__thumbnail
      @apply transform scale-105

  .PostPreviewListItem__title
    @apply transition duration-200 ease-in-out

  .PostPreviewListItem__thumbnail
    @apply transition duration-200 ease-in-out

  @apply cursor-pointer
</style>
