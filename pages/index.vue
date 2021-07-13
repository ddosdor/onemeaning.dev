<template>
  <div>
    <UiPageSection>
      <UiPageHeader main
                    title="Hi there, I'm ...."
      />
      <AboutMeContent />
    </UiPageSection>
    <UiPageSection>
      <UiPageHeader highlight
                    title="Recent Posts"
      />
      <RecentPostsList />
    </UiPageSection>
    <UiPageSection>
      <UiPageHeader highlight
                    title="Recent Projects"
      />
      <RecentProjectsList />
    </UiPageSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import UiPageSection from '@/components/Shared/Ui/UiPageSection.vue';
import UiPageHeader from '@/components/Shared/Ui/UiPageHeader.vue';
import AboutMeContent from '@/components/About/AboutMeContent.vue';
import RecentPostsList from '@/components/Blog/RecentPostsList.vue';
import RecentProjectsList from '@/components/Projects/RecentProjectsList.vue';

export default defineComponent({
  components: {
    UiPageSection,
    UiPageHeader,
    AboutMeContent,
    RecentPostsList,
    RecentProjectsList,
  },
});
</script>
