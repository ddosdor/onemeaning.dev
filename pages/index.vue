<template>
  <div>
    <SharedUiPageSection>
      <SharedUiPageHeader main
                          title="Hi there, I'm Sebastian."
                          data-aos="zoom-y-in"
      />
      <AboutMeContent />
    </SharedUiPageSection>
    <SharedUiPageSection>
      <SharedUiPageHeader highlight
                          title="Recent Posts"
      />
      <SharedUiLoadingContentWrapper :is-loading="isLoadingRecentPosts"
                                     animation="none"
      >
        <BlogRecentPostsList />
      </SharedUiLoadingContentWrapper>
    </SharedUiPageSection>
    <SharedUiPageSection>
      <SharedUiPageHeader title="Recent Projects / Repositories" />
      <SharedUiLoadingContentWrapper :is-loading="isLoadingRecentProjects"
                                     animation="none"
      >
        <ProjectsRecentProjectsList />
      </SharedUiLoadingContentWrapper>
    </SharedUiPageSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { usePosts } from '@/composables/usePosts';
import { useProjects } from '@/composables/useProjects';

export default defineComponent({
  setup() {
    const { isLoading: isLoadingRecentPosts } = usePosts();
    const { isLoading: isLoadingRecentProjects } = useProjects();
    return { isLoadingRecentPosts, isLoadingRecentProjects };
  },
});
</script>
