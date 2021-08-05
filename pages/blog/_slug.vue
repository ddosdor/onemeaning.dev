<template>
  <article>
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
        <div class="rounded-full w-1 h-1 bg-gray-300" />
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
import { defineComponent } from '@nuxtjs/composition-api';
import { useHelpers } from '@/composables/useHelpers';

export default defineComponent({
  setup() {
    const { formatDate } = useHelpers();
    return {
      formatDate,
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch();
    return { post };
  },
});
</script>

<style lang="sass">
.nuxt-content
  li
    &::before
      bottom: 9px
      content: ' '
      @apply absolute left-0 h-2 w-2 bg-gray-300 rounded-full
    @apply relative pl-4
  h2, h3
    @apply mt-8 mb-3 font-extrabold
  h2
    @apply text-2xl
  h3
    @apply text-xl
  p
    @apply my-6
  .shiki
    @apply p-2 text-sm
</style>
