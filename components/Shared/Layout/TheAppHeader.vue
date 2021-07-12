<template>
  <header class="TheAppHeader
                 sticky container p-4 flex flex-col
                 md:px-12
                 lg:px-20 lg:w-4/5 lg:mx-auto
                 2xl:px-32
                "
  >
    <a>onemeanindg.dev</a>
    <nav>
      Navigation
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'TheAppHeader',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.PageHeader
  // component style
</style>
