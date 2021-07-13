<template>
  <article>
    <nuxt-content :document="post" />
  </article>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  async asyncData({ $content, params }) {
    const post = await $content('projects', params.slug).fetch();
    return { post };
  },
});
</script>
