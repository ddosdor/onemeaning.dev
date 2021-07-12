<template>
  <footer class="PageFooter bg-gray-800">
    <div class="container text-gray-200 p-4
                md:px-12 md:flex-row
                lg:px-20 lg:w-4/5 lg:mx-auto
                2xl:px-32
              "
    >
      Footer content
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'PageFooter',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.PageFooter
  // component style
</style>
