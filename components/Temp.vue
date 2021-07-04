<template>
  <div class="Temp">
    Component Temp
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Temp',
  setup() {
    // component setup
  },
});
</script>

<style lang="sass" scoped>
.Temp
  background: #fff
</style>
