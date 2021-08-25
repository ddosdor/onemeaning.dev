<template>
  <div class="RecentPostsList mt-6 grid grid-cols-0 grid-flow-row gap-12
              md:grid-cols-2
             "
  >
    <RecentPostsListItem v-for="(recentPost, index) in recentPosts"
                         :key="`recent-post-${index}`"
                         :recent-post="recentPost"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';

import { useBlog } from '@/composables/useBlog';

import RecentPostsListItem from './RecentPostsListItem.vue';

export default defineComponent({
  name: 'RecentPostsList',
  components: {
    RecentPostsListItem,
  },
  setup() {
    const { recentPosts, getRecentPosts } = useBlog();

    useAsync(() => getRecentPosts());

    return { recentPosts };
  },
});
</script>
