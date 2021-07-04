<template>
  <div class="PostsList">
    <ul>
      <li
        v-for="(post, index) in postsList"
        :key="`blog-post-${index}`"
      >
        <PostPreview :post="post" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, computed, PropType,
} from '@nuxtjs/composition-api';
import PostPreview from '@/components/Blog/PostPreview.vue';

import { BlogPost } from '@/types.d';

export default defineComponent({
  name: 'PostsList',
  components: {
    PostPreview,
  },
  props: {
    postsList: {
      type: [] as PropType<BlogPost[]>,
      default: () => ([] as BlogPost[]),
    },
  },
  setup(props) {
    const { postsList } = props;
    const maxPostsOnPage = 4;
    const displayedPostsRange = ref(4);
    const selectedTag = ref('');

    const filteredPostsList = computed(() => postsList
      .filter((post) => {
        const isBlogPost = post.path.includes('/blog/');
        const isReadyToPublish = new Date(post.date) <= new Date();
        const hasTags = post.tags && post.tags.includes(selectedTag.value);

        return selectedTag.value
          ? isBlogPost && isReadyToPublish && hasTags
          : isBlogPost && isReadyToPublish;
      }));

    function loadMorePosts() {
      displayedPostsRange.value += maxPostsOnPage + 1;
    }

    function updatedSelectedTag(newTag: string) {
      selectedTag.value = newTag;
    }

    return {
      filteredPostsList,
      loadMorePosts,
      updatedSelectedTag,
    };
  },
});
</script>

<style lang="sass" scoped>
.PostsList
  // component style
</style>
