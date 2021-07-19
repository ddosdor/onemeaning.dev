import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { BlogPostType, IContentDocument } from '@/utils/types';
import { POSTS_LIST_LIMIT_PER_PAGE, RECENT_POSTS_LIST_LIMIT } from '@/utils/consts';

interface UseBlogComposable {
  getRecentPosts(): Promise<void>
  getPosts(): Promise<void>
  recentPosts: ComputedRef<
    (BlogPostType & IContentDocument) |
    (BlogPostType & IContentDocument)[] |
    null
  >
  posts: ComputedRef<
    (BlogPostType & IContentDocument) |
    (BlogPostType & IContentDocument)[] |
    null
  >
  isLoadingRecentPosts: ComputedRef<Boolean>
  isRecentPostsEmpty: ComputedRef<Boolean>
  isLoadingPosts: ComputedRef<Boolean>
  isPostsEmpty: ComputedRef<Boolean>
}

const recentPosts = ref<(BlogPostType & IContentDocument) |
                        (BlogPostType & IContentDocument)[] |
                        null>([]);
const posts = ref<(BlogPostType & IContentDocument) |
                  (BlogPostType & IContentDocument)[] |
                  null>([]);
const isLoadingRecentPosts = ref<Boolean>(false);
const isRecentPostsEmpty = computed(() => recentPosts.value?.length === 0);
const isLoadingPosts = ref<Boolean>(false);
const isPostsEmpty = computed(() => posts.value?.length === 0);

export const useBlog = (): UseBlogComposable => {
  const { $content, query } = useContext();

  /**
   * Get recent posts list from 'blog' content.\
   * List will be available in `recentPosts` reactive property
   */
  const getRecentPosts = async (): Promise<void> => {
    if (isRecentPostsEmpty.value) {
      isLoadingRecentPosts.value = true;
      recentPosts.value = await $content('blog')
        .only(['title', 'thumbnail', 'excerpt', 'path'])
        .sortBy('date', 'desc')
        .limit(RECENT_POSTS_LIST_LIMIT)
        .fetch<BlogPostType>();
      isLoadingRecentPosts.value = false;
    }
  };

  /**
   * Get paginated posts list from 'blog' content.\
   * List will be available in `posts` reactive property
   */
  const getPosts = async (): Promise<void> => {
    const page = Number(query.value.page) === 1 ? 0 : Number(query.value.page);
    const skip = (POSTS_LIST_LIMIT_PER_PAGE - 1) * page;
    isLoadingPosts.value = true;
    posts.value = await $content('blog')
      .only(['title', 'date', 'thumbnail', 'excerpt', 'tags', 'path', 'author'])
      .sortBy('date', 'desc')
      .skip(skip)
      .limit(POSTS_LIST_LIMIT_PER_PAGE)
      .fetch<BlogPostType>();
    isLoadingPosts.value = false;
  };

  return {
    getRecentPosts,
    getPosts,
    recentPosts: computed(() => recentPosts.value),
    posts: computed(() => posts.value),
    isLoadingRecentPosts: computed(() => isLoadingRecentPosts.value),
    isRecentPostsEmpty,
    isLoadingPosts: computed(() => isLoadingPosts.value),
    isPostsEmpty,
  };
};
