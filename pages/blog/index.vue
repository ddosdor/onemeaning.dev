<template>
  <div>
    <SharedUiPageSection>
      <SharedUiPageHeader main
                          highlight
                          title="Blog."
      />
      <div class="mt-10">
        <SharedUiLoadingContentWrapper :is-loading="isLoading"
                                       as-skeleton
                                       animation="none"
        >
          <template #skeleton>
            <BlogPostsPreviewListSkeleton />
          </template>
          <LazyBlogPostsPreviewList v-if="!isEmpty"
                                    :key="isLoading"
                                    :posts-list="posts"
          />
          <LazyBlogPostsPreviewListEmpty v-if="!isLoading && isEmpty" />
          <LazySharedUiPagination v-if="!isEmpty"
                                  :has-next-page="hasNextPage"
                                  @changePage="fixPagePosition"
          />
        </SharedUiLoadingContentWrapper>
      </div>
    </SharedUiPageSection>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, useContext, ref, computed, watch, onMounted,
} from '@nuxtjs/composition-api';

import { usePosts } from '@/composables/usePosts';
import { POSTS_LIST_LIMIT_PER_PAGE } from '@/utils/consts';

export default defineComponent({
  setup() {
    const { query } = useContext();
    const { getPosts, posts, isLoading, isEmpty } = usePosts();
    const fakeLoading = ref<Boolean>(false);

    watch(
      () => query.value?.page,
      (newPage) => getPosts({
        limit: POSTS_LIST_LIMIT_PER_PAGE,
        page: Number(newPage),
      }),
      { immediate: true },
    );

    function fixPagePosition() {
      fakeLoading.value = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        fakeLoading.value = false;
      }, 1000);
    }

    onMounted(() => fixPagePosition());

    return {
      posts,
      isEmpty,
      isLoading: computed(() => isLoading.value || fakeLoading.value),
      hasNextPage: computed(() => posts.value?.length === POSTS_LIST_LIMIT_PER_PAGE),
      fixPagePosition,
    };
  },
});
</script>
