import {
  ref, computed, useContext, useStatic, ComputedRef,
} from '@nuxtjs/composition-api';

import { BlogPost, IContentDocument } from '@/types.d';

interface UseBlogPostsComposable {
  posts: ComputedRef<
    (BlogPost & IContentDocument) |
    (BlogPost & IContentDocument)[] |
    null
  >
  isLoading: ComputedRef<Boolean>
}

const isLoading = ref<Boolean>(false);

export function useBlogPosts(): UseBlogPostsComposable {
  const { params, $content } = useContext();
  const slug = computed(() => params.value.slug);

  const posts = useStatic(async () => {
    isLoading.value = true;
    const blog = await $content('blog').fetch<BlogPost>();
    isLoading.value = false;
    return blog;
  }, slug, 'blog');

  return {
    posts: computed(() => posts.value),
    isLoading: computed(() => isLoading.value),
  };
}
