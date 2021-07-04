import {
  ref, computed, watch, useContext, useStatic, ComputedRef,
} from '@nuxtjs/composition-api';

import { BlogPost, IContentDocument } from '@/types.d';

interface UseBlogPostsComposable {
  getPosts(): void,
  posts: ComputedRef<
    (BlogPost & IContentDocument) |
    (BlogPost & IContentDocument)[] |
    null
  >
  isLoading: ComputedRef<Boolean>
}

const isLoading = ref<Boolean>(false);
const posts = ref<(BlogPost & IContentDocument) |
  (BlogPost & IContentDocument)[] |
  null>([]);

function getPosts() {
  const { params, $content } = useContext();
  const slug = computed(() => params.value.slug);

  posts.value = (useStatic(async () => {
    isLoading.value = true;
    const blog = await $content('blog').fetch<BlogPost>();
    isLoading.value = false;
    return blog;
  }, slug, 'blog')).value;
}

export function useBlogPosts(): UseBlogPostsComposable {
  return {
    getPosts,
    posts: computed(() => posts.value),
    isLoading: computed(() => isLoading.value),
  };
}
