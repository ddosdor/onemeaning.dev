<template>
  <main class="PageContent
               p-4 flex-grow
               md:px-12 pt-20
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
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.PageContent
  // component style
</style>
