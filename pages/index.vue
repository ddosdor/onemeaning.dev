<template>
  <div>
    <UiPageHeader main
                  title="Hi there, I'm Sebastian."
    />
    <AboutMeContent />
    <UiPageHeader highlight
                  title="Recent Posts"
    />
    <RecentPostsList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import UiPageHeader from '@/components/Shared/Ui/UiPageHeader.vue';
import AboutMeContent from '@/components/About/AboutMeContent.vue';
import RecentPostsList from '@/components/Blog/RecentPostsList.vue';

export default defineComponent({
  components: {
    UiPageHeader,
    AboutMeContent,
    RecentPostsList,
  },
});
</script>
