<template>
  <div class="UiLoadingContentWrapper relative">
    <div v-if="isLoading"
         class="absolute top-24 w-full animate-fade-in-down"
    >
      <LazySharedUiLoadingSpinner data-testid="ui-loading-spinner" />
    </div>
    <div :class="{'opacity-5' : isLoading, 'animate-fade-in-up': !isLoading }">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiLoadingContentWrapper',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
