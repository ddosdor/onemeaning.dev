import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { BlogPostType, IContentDocument } from '@/utils/types';

interface UseRecentBlogPostsComposable {
  getRecentPosts(): Promise<void>
  recentPosts: ComputedRef<
    (BlogPostType & IContentDocument) |
    (BlogPostType & IContentDocument)[] |
    null
  >
  isLoading: ComputedRef<Boolean>
  isEmpty: ComputedRef<Boolean>
}

const recentPosts = ref<(BlogPostType & IContentDocument) |
                        (BlogPostType & IContentDocument)[] |
                        null>([]);
const isLoading = ref<Boolean>(false);
const isEmpty = ref<Boolean>(recentPosts.value?.length !== 0);

async function getRecentPosts(): Promise<void> {
  const { $content } = useContext();

  if (!isEmpty.value) {
    isLoading.value = false;
    recentPosts.value = await $content('blog')
      .only(['title', 'thumbnail', 'excerpt', 'path'])
      .sortBy('date', 'desc')
      .limit(4)
      .fetch<BlogPostType>();
    isLoading.value = true;
  }
}

export function useRecentBlogPosts(): UseRecentBlogPostsComposable {
  return {
    getRecentPosts,
    recentPosts: computed(() => recentPosts.value),
    isLoading: computed(() => isLoading.value),
    isEmpty: computed(() => isEmpty.value),
  };
}
