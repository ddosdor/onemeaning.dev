<template>
  <article v-if="post">
    <div class="lg:px-20">
      <SharedUiPageHeader main
                          :title="post.title"
                          data-aos="zoom-y-in"
      />
      <div class="flex items-center space-x-4 mt-4 mb-8"
           data-aos="zoom-y-in"
           data-aos-delay="100"
      >
        <BlogPostAuthor v-if="post.author"
                        :avatar="post.author.avatar"
                        :name="post.author.name"
        />
        <div class="app-dot-divider" />
        <time class="text-sm text-gray-500">{{ formatDate(post.date) }}</time>
      </div>
      <SharedUiImage :src="post.thumbnail"
                     :title="post.title"
                     :alt="post.title"
                     custom-class="object-fit max-w-full h-auto rounded-lg"
                     width="675px"
                     height="380px"
                     data-aos="zoom-y-in"
                     data-aos-delay="200"
      />
      <div class="mt-10">
        <nuxt-content :document="post"
                      data-aos="zoom-y-in"
                      data-aos-delay="300"
        />
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import {
  computed, defineComponent, useContext, useAsync, useMeta,
} from '@nuxtjs/composition-api';
import { useHelpers } from '@/composables/useHelpers';
import { useBlog } from '@/composables/useBlog';

export default defineComponent({
  setup() {
    const { formatDate } = useHelpers();
    const { params } = useContext();
    const { post, getPost } = useBlog();

    useAsync(() => getPost(params.value.slug));

    const title = computed(() => post.value?.title);
    const description = computed(() => post.value?.description);

    useMeta(() => ({
      title: title.value,
      meta: [{
        hid: 'description',
        name: 'description',
        content: description.value as string,
      }],
    }));

    return {
      post,
      formatDate,
    };
  },
  head: {},
});
</script>

<style lang="sass">
.nuxt-content
  li
    &::before
      content: ' '
      top: 9px
      @apply absolute left-0 h-2 w-2 bg-gray-300 rounded-full
    @apply relative pl-4

  h2,
  h3
    @apply mt-8 mb-3 font-extrabold

  h2
    @apply text-2xl

  h3
    @apply text-xl

  p
    @apply my-6

  .hljs
    @apply p-2 text-sm

  a
    color: $link-color
    @aaply transition-colors duration-200

    &:hover
      color: darken($link-color, 20%)

  code
    @apply inline-block p-1 bg-gray-100 text-sm
</style>
