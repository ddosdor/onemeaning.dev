<template>
  <div>
    <PostsList
      v-if="!isLoading"
      :posts-list="posts"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useBlogPosts } from '@/composables';
import PostsList from '@/components/Blog/PostsList.vue';

export default defineComponent({
  components: {
    PostsList,
  },
  setup() {
    const { posts, isLoading } = useBlogPosts();
    return {
      isLoading,
      posts,
    };
  },
});
</script>
