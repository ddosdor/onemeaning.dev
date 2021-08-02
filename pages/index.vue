<template>
  <div>
    <SharedUiPageSection>
      <SharedUiPageHeader main
                          title="Hi there, I'm Sebastian."
      />
      <AboutMeContent />
    </SharedUiPageSection>
    <SharedUiPageSection>
      <SharedUiPageHeader highlight
                          title="Recent Posts"
      />
      <SharedUiLoadingContentWrapper :is-loading="isLoadingRecentPosts">
        <BlogRecentPostsList />
      </SharedUiLoadingContentWrapper>
    </SharedUiPageSection>
    <SharedUiPageSection>
      <SharedUiPageHeader title="Recent Projects / Repositories" />
      <SharedUiLoadingContentWrapper :is-loading="isLoadingRecentProjects">
        <ProjectsRecentProjectsList />
      </SharedUiLoadingContentWrapper>
    </SharedUiPageSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import { useBlog } from '@/composables/useBlog';
import { useProjects } from '@/composables/useProjects';

export default defineComponent({
  setup() {
    const { isLoadingRecentPosts } = useBlog();
    const { isLoadingRecentProjects } = useProjects();
    return { isLoadingRecentPosts, isLoadingRecentProjects };
  },
});
</script>
