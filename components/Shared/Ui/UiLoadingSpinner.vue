<template>
  <div v-bind="$attrs"
       class="UiLoadingSpinner relative w-full h-full flex flex-col items-center justify-center animate-fade-in-tooltip"
  >
    <div class="loader ease-linear rounded-full border-t-8 h-28 w-28" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiLoadingSpinner',
});
</script>

<style lang="sass" scoped>
@keyframes spinner
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

.UiLoadingSpinner
  .loader
    animation: spinner 1s linear infinite
    @apply border-t-green-300
</style>
