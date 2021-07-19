<template>
  <div>
    <UiPageSection>
      <UiPageHeader main
                    title="Hi there, I'm Sebastian."
      />
      <AboutMeContent />
    </UiPageSection>
    <UiPageSection>
      <UiPageHeader highlight
                    title="Recent Posts"
      />
      <UiLoadingContentWrapper :is-loading="isLoadingRecentPosts">
        <RecentPostsList />
      </UiLoadingContentWrapper>
    </UiPageSection>
    <UiPageSection>
      <UiPageHeader title="Recent Projects" />
      <UiLoadingContentWrapper :is-loading="isLoadingRecentProjects">
        <RecentProjectsList />
      </UiLoadingContentWrapper>
    </UiPageSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import UiPageSection from '@/components/Shared/Ui/UiPageSection.vue';
import UiPageHeader from '@/components/Shared/Ui/UiPageHeader.vue';
import UiLoadingContentWrapper from '@/components/Shared/Ui/UiLoadingContentWrapper.vue';
import AboutMeContent from '@/components/About/AboutMeContent.vue';
import RecentPostsList from '@/components/Blog/RecentPostsList.vue';
import RecentProjectsList from '@/components/Projects/RecentProjectsList.vue';

import { useBlog, useProjects } from '@/composables';

export default defineComponent({
  components: {
    UiPageSection,
    UiPageHeader,
    UiLoadingContentWrapper,
    AboutMeContent,
    RecentPostsList,
    RecentProjectsList,
  },
  setup() {
    const { isLoadingRecentPosts } = useBlog();
    const { isLoadingRecentProjects } = useProjects();
    return { isLoadingRecentPosts, isLoadingRecentProjects };
  },
});
</script>
