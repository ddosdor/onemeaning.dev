<template>
  <div class="UiLoadingContentWrapper relative">
    <div v-if="isLoading"
         class="absolute top-24 w-full animate-fade-in-down"
    >
      <LazySharedUiLoadingSpinner data-testid="ui-loading-spinner" />
    </div>
    <div :class="{'opacity-5' : isLoading,
                  'animate-fade-in-up': !isLoading && animation === 'fade-in-up',
                  'shift-left-right': !isLoading && animation === 'shift-left-right',
                  '': !isLoading && animation === 'none',
    }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiLoadingContentWrapper',
  props: {
    isContentVisibleDuringLoading: Boolean,
    isLoading: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: String,
      default: 'fade-in-up',
      validator(value: string) {
        return ['fade-in-up', 'shift-left-right', 'none'].includes(value);
      },
    },
  },
});
</script>

<style lang="sass" scoped>
.shift-left-right
  *:nth-child(even)
    @apply animate-fade-in-right
  *:nth-child(odd)
    @apply animate-fade-in-left
</style>
