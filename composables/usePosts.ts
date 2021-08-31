/* eslint-disable no-unused-vars */
import {
  ref, useContext, ComputedRef, computed,
} from '@nuxtjs/composition-api';

import { BlogPostType } from '@/utils/types';

import { useAppEnvironment } from '@/composables/useAppEnvironment';

export type GetPostsOption = {
  limit: number
  page?: number
}

export type UsePostsComposableReturn = {
  getPosts(options: GetPostsOption): Promise<void>
  posts: ComputedRef<BlogPostType[] | undefined>
  isLoading: ComputedRef<Boolean>
  isEmpty: ComputedRef<Boolean>
};

function includePostAccordingToAppEnvironment(fetchedPost: BlogPostType): boolean {
  const { isDev } = useAppEnvironment();
  return isDev || !fetchedPost.isDraft;
}

export function usePosts(): UsePostsComposableReturn {
  const { $content } = useContext();

  const posts = ref<BlogPostType[]>([]);
  const isLoading = ref<Boolean>(false);

  /**
   * Get posts list from 'blog' content sorted by date.\
   * List will be available in `posts` reactive property
   */
  async function getPosts(options: GetPostsOption) {
    isLoading.value = true;
    const page = options.page && Number(options.page) === 1 ? 0 : Number(options.page);
    const skip = page ? (options?.limit - 1) * page : 0;

    posts.value = ((await $content('blog')
      .only([
        'title', 'date', 'thumbnail', 'excerpt',
        'tags', 'path', 'author', 'isDraft',
      ])
      .sortBy('date', 'desc')
      .skip(skip)
      .limit(options.limit)
      .fetch<BlogPostType>()
    ) as BlogPostType[])
      .filter(includePostAccordingToAppEnvironment);
    isLoading.value = false;
  }

  return {
    getPosts,
    posts: computed(() => posts.value),
    isLoading: computed(() => isLoading.value),
    isEmpty: computed(() => posts.value?.length === 0),
  };
}
