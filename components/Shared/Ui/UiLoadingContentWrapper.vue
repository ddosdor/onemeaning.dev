<template>
  <div class="UiLoadingContentWrapper relative">
    <div v-if="isLoading && !asSkeleton"
         class="absolute top-24 w-full"
         data-aos="fade-in-down"
    >
      <LazySharedUiLoadingSpinner data-testid="ui-loading-spinner" />
    </div>
    <div v-if="isLoading && asSkeleton"
         class="relative top-0 w-full h-full"
    >
      <slot name="skeleton" />
    </div>
    <div :class="{'opacity-5' : isLoading && !asSkeleton,
                  'hidden' : isLoading && asSkeleton,
         }"
         :data-aos="animation"
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
    asSkeleton: Boolean,
    isLoading: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: String,
      default: 'fade-in-up',
      validator(value: string) {
        return ['fade-in-up', 'fade-in-down', 'none'].includes(value);
      },
    },
  },
});
</script>
