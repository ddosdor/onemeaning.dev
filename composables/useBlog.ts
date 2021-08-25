/* eslint-disable no-unused-vars */
import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { BlogPostType } from '@/utils/types';
import { POSTS_LIST_LIMIT_PER_PAGE, RECENT_POSTS_LIST_LIMIT } from '@/utils/consts';
import { useAppEnvironment } from '@/composables/useAppEnvironment';

interface UseBlogComposable {
  getRecentPosts(): Promise<void>
  getPosts(): Promise<void>
  getPost(slug: string): Promise<void>
  recentPosts: ComputedRef<BlogPostType[] | null>
  posts: ComputedRef<BlogPostType[] | null>
  post: ComputedRef<BlogPostType | undefined>
  isLoadingRecentPosts: ComputedRef<Boolean>
  isRecentPostsEmpty: ComputedRef<Boolean>
  isLoadingPosts: ComputedRef<Boolean>
  isPostsEmpty: ComputedRef<Boolean>
  postsHasNextPage: ComputedRef<Boolean>
}

const recentPosts = ref<BlogPostType[]>([]);
const posts = ref<BlogPostType[]>([]);
const post = ref<BlogPostType>();
const isLoadingRecentPosts = ref<Boolean>(false);
const isRecentPostsEmpty = computed(() => recentPosts.value?.length === 0);
const isLoadingPosts = ref<Boolean>(false);
const isPostsEmpty = computed(() => posts.value?.length === 0);
const postsHasNextPage = computed(() => posts.value?.length === POSTS_LIST_LIMIT_PER_PAGE);

function includePostAccordingToAppEnvironment(fetchedPost: BlogPostType): boolean {
  const { isDev } = useAppEnvironment();
  return isDev || !fetchedPost.isDraft;
}

export const useBlog = (): UseBlogComposable => {
  const { $content, query } = useContext();

  /**
   * Get recent posts list from 'blog' content.\
   * List will be available in `recentPosts` reactive property
   */
  const getRecentPosts = async (): Promise<void> => {
    if (isRecentPostsEmpty.value) {
      isLoadingRecentPosts.value = true;
      const fetchedRecentPosts = await $content('blog')
        .only(['title', 'thumbnail', 'excerpt', 'path', 'isDraft'])
        .sortBy('date', 'desc')
        .limit(RECENT_POSTS_LIST_LIMIT)
        .fetch<BlogPostType>();
      recentPosts.value = fetchedRecentPosts.filter(includePostAccordingToAppEnvironment);
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
    const fetchedPosts = await $content('blog')
      .only(['title', 'date', 'thumbnail', 'excerpt', 'tags', 'path', 'author', 'isDraft'])
      .sortBy('date', 'desc')
      .skip(skip)
      .limit(POSTS_LIST_LIMIT_PER_PAGE)
      .fetch<BlogPostType>();
    posts.value = fetchedPosts.filter(includePostAccordingToAppEnvironment);
    isLoadingPosts.value = false;
  };

  const getPost = async (slug: string): Promise<void> => {
    const document = (await $content('blog', slug).fetch<BlogPostType>()) as BlogPostType;
    post.value = document;
  };

  return {
    getRecentPosts,
    getPosts,
    getPost,
    recentPosts: computed(() => recentPosts.value),
    posts: computed(() => posts.value),
    post: computed(() => post.value),
    isLoadingRecentPosts: computed(() => isLoadingRecentPosts.value),
    isRecentPostsEmpty,
    isLoadingPosts: computed(() => isLoadingPosts.value),
    isPostsEmpty,
    postsHasNextPage,
  };
};
