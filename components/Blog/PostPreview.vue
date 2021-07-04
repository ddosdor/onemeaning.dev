<template>
  <section class="">
    <time class="">{{ formatedPublishPostDate }}</time>
    <h2 class="">
      <a :href="post.path" class="">{{ post.title }}</a>
    </h2>
    <p v-if="post.excerpt" class="">
      {{ post.excerpt }}
    </p>
    <nuxt-link class="" :to="post.path">
      Read More >
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api';
import { DateTimeFormatOptions } from '@/index.d';

export default defineComponent({
  name: 'PostPreview',
  props: {
    post: {
      type: Object,
      default: () => ({}),
      // required: true,
    },
  },
  setup(props) {
    const { post } = props;

    const formatedPublishPostDate = computed(() => {
      const dateFormat = new Date(post.published);
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
