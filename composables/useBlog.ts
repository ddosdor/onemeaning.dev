import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { BlogPostType, QueryBlogPostsType, IContentDocument } from '@/utils/types';
import { POSTS_LIST_LIMIT_PER_PAGE, RECENT_POSTS_LIST_LIMIT } from '@/utils/consts';

interface UseBlogComposable {
  getRecentPosts(): Promise<void>
  getPosts(query: QueryBlogPostsType): Promise<void>
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
  isEmpty: ComputedRef<Boolean>
}

const recentPosts = ref<(BlogPostType & IContentDocument) |
                        (BlogPostType & IContentDocument)[] |
                        null>([]);
const posts = ref<(BlogPostType & IContentDocument) |
                  (BlogPostType & IContentDocument)[] |
                  null>([]);
const isLoadingRecentPosts = ref<Boolean>(false);
const isEmpty = ref<Boolean>(recentPosts.value?.length !== 0);

export function useBlog(): UseBlogComposable {
  const { $content } = useContext();

  async function getRecentPosts(): Promise<void> {
    if (!isEmpty.value) {
      isLoadingRecentPosts.value = false;
      recentPosts.value = await $content('blog')
        .only(['title', 'thumbnail', 'excerpt', 'path'])
        .sortBy('date', 'desc')
        .limit(RECENT_POSTS_LIST_LIMIT)
        .fetch<BlogPostType>();
      isLoadingRecentPosts.value = true;
    }
  }

  /**
   * Get posts list
   *
   * @param query - Query for getting post list (page)
   */
  async function getPosts(query: QueryBlogPostsType): Promise<void> {
    const skip = (POSTS_LIST_LIMIT_PER_PAGE - 1) * Number(query.page);
    posts.value = await $content('blog')
      .only(['title', 'date', 'excerpt', 'tags', 'path'])
      .sortBy('date', 'desc')
      .skip(skip)
      .limit(POSTS_LIST_LIMIT_PER_PAGE)
      .fetch<BlogPostType>();
  }

  return {
    getRecentPosts,
    getPosts,
    recentPosts: computed(() => recentPosts.value),
    posts: computed(() => posts.value),
    isLoadingRecentPosts: computed(() => isLoadingRecentPosts.value),
    isEmpty: computed(() => isEmpty.value),
  };
}
