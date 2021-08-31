/* eslint-disable no-unused-vars */
import {
  ref, ComputedRef, computed, useContext,
} from '@nuxtjs/composition-api';

import { BlogPostType } from '@/utils/types';

export declare type UsePostComposableReturn = {
  getPost(slug: string): Promise<void>
  post: ComputedRef<BlogPostType | undefined>
  isLoading: ComputedRef<Boolean>
}

export function usePost(): UsePostComposableReturn {
  const { $content } = useContext();

  const post = ref<BlogPostType>();
  const isLoading = ref<Boolean>(false);

  async function getPost(slug: string) {
    isLoading.value = true;
    post.value = (await $content('blog', slug).fetch<BlogPostType>()) as BlogPostType;
    isLoading.value = false;
  }

  return {
    getPost,
    post: computed(() => post.value),
    isLoading: computed(() => isLoading.value),
  };
}
