<template>
  <div class="UiSkeletonTextContent space-y-3">
    <SharedUiSkeletonBox v-for="index in Array.from(Array(lines).keys())"
                         :key="`skeleton-line-${index}`"
                         class="rounded-lg w-full h-4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiSkeletonTextContent',
  props: {
    lines: {
      type: Number,
      default: 2,
    },
  },
});
</script>
