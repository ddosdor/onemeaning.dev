<template>
  <div>
    <PostsList :posts-list="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PostsList from '@/components/Blog/PostsList.vue';

export default defineComponent({
  components: {
    PostsList,
  },
  async asyncData({ $content }) {
    const posts = await $content('blog').fetch();

    return {
      posts,
    };
  },
});
</script>
