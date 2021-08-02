<template>
  <div class="UiSkeletonTextContent space-y-3">
    <SharedUiSkeletonBox v-for="index in Array.from(Array(lines).keys())"
                         :key="`skeleton-line-${index}`"
                         class="rounded-lg h-4"
                         :class="drawWidth()"
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
  setup() {
    function drawWidth(): String {
      const possibleWidthClasses = ['w-3/4', 'w-4/6', 'w-11/12', 'w-3/5', 'w-3/8', 'w-4/5', 'w-5/5'];
      return possibleWidthClasses[Math.floor(Math.random() * possibleWidthClasses.length)];
    }

    return {
      drawWidth,
    };
  },
});
</script>
