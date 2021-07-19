<template>
  <article class="flex flex-col
                  lg:flex-row lg:space-x-6
                 "
  >
    <figure class="w-full
                   lg:w-2/5 lg:flex-none
                  "
    >
      <img class="object-fit max-w-full h-auto rounded-lg"
           :src="post.thumbnail"
      >
    </figure>
    <div class="mt-2">
      <div class="flex items-center">
        <div class="text-sm">
          Author
        </div>
        <time class="text-sm text-gray-500 ml-auto">{{ formatedPublishPostDate }}</time>
      </div>
      <h2 class="mt-4
                 lg:mt-2
                "
      >
        <a :href="post.path"
           class="text-lg font-bold app-links
                  md:text-xl
                 "
        >{{ post.title }}</a>
      </h2>
      <p v-if="post.excerpt"
         class="mt-2 line-clamp-3"
      >
        <nuxt-content :document="{ body: post.excerpt }" />
      </p>
      <nuxt-link class=""
                 :to="post.path"
      >
        Read More >
      </nuxt-link>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from '@nuxtjs/composition-api';
import { DateTimeFormatOptions } from '@/index.d';
import { BlogPostType } from '@/utils/types';

export default defineComponent({
  name: 'PostPreview',
  props: {
    post: {
      type: Object as PropType<BlogPostType>,
      required: true,
    },
  },
  setup(props) {
    const { post } = props;

    const formatedPublishPostDate = computed(() => {
      const dateFormat = new Date(post.date);
      const options: DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      return dateFormat.toLocaleDateString('en-US', options);
    });

    return {
      formatedPublishPostDate,
    };
  },
});
</script>

<style lang="sass" scoped>
.PostPreview
  // component style
</style>
