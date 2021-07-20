<template>
  <div class="flex flex-col h-screen">
    <LayoutTheAppHeader />
    <LayoutTheAppContent>
      <Nuxt />
    </LayoutTheAppContent>
    <LayoutTheAppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({});
</script>
