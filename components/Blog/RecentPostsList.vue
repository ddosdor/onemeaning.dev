<template>
  <div class="RecentPostsList mt-6 grid grid-rows-4 grid-flow-col gap-4
              md:grid-rows-2
             "
  >
    <RecentPostsListItem v-for="(recentPost, index) in recentPosts"
                         :key="`recent-post-${index}`"
                         :recent-posts="recentPost"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useRecentBlogPosts } from '@/composables';
import RecentPostsListItem from './RecentPostsListItem.vue';

export default defineComponent({
  name: 'RecentPostsList',
  components: {
    RecentPostsListItem,
  },
  setup() {
    const { recentPosts, getRecentPosts } = useRecentBlogPosts();
    getRecentPosts();

    return { recentPosts };
  },
});
</script>

<style lang="sass" scoped>
.RecentPostsList
  // component style
</style>
