<template>
  <div class="RecentPostsList mt-6 grid grid-cols-0 grid-flow-row gap-12
              md:grid-cols-2
             "
  >
    <BlogRecentPostsListItem v-for="(recentPost, index) in recentPosts"
                             :key="`recent-post-${index}`"
                             :recent-post="recentPost"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { usePosts } from '@/composables/usePosts';

import { RECENT_POSTS_LIST_LIMIT } from '@/utils/consts';

export default defineComponent({
  name: 'RecentPostsList',
  setup() {
    const { getPosts, posts: recentPosts } = usePosts();

    getPosts({ limit: RECENT_POSTS_LIST_LIMIT });

    return { recentPosts };
  },
});
</script>
