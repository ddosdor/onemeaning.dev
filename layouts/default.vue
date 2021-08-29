<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <LayoutTheAppHeader />
    <LayoutTheAppContent>
      <Nuxt />
    </LayoutTheAppContent>
    <LayoutTheAppFooter />
    <client-only>
      <SharedCookieBanner />
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>
