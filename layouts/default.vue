<template>
  <div class="flex flex-col h-screen">
    <TheAppHeader />
    <TheAppContent>
      <Nuxt />
    </TheAppContent>
    <TheAppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import TheAppHeader from '@/components/Shared/Layout/TheAppHeader.vue';
import TheAppContent from '@/components/Shared/Layout/TheAppContent.vue';
import TheAppFooter from '@/components/Shared/Layout/TheAppFooter.vue';

export default defineComponent({
  components: {
    TheAppHeader,
    TheAppContent,
    TheAppFooter,
  },
  setup() {

  },
});
</script>
