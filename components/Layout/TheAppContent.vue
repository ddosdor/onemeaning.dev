<template>
  <main class="PageContent
               flex-grow px-4 pt-52 pb-6
               md:px-12 md:pt-40
               lg:px-20 lg:w-4/5 lg:mx-auto
               2xl:px-32
              "
  >
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PageContent',
});
</script>
