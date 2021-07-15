<template>
  <div v-bind="$attrs"
       class="UiLoadingSpinner relative w-full h-full flex flex-col items-center justify-center animate-fade-in-tooltip"
  >
    <div class="loader ease-linear rounded-full border-8 border-t-8 h-20 w-20" />
    <small>Please wait</small>
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
    @apply border-green-200 border-t-green-500
</style>
