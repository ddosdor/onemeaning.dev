<template>
  <div class="UiSkeletonBox" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiSkeletonBox',
});
</script>
,<style lang="sass" scoped>
.UiSkeletonBox
  &::after
    animation: shimmer 1s infinite
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 60%, rgba(255, 255, 255, 0))
    content: ''
    transform: translateX(-100%)
    @apply absolute top-0 right-0 bottom-0 left-0
  @apply relative bg-gray-200 overflow-hidden

@keyframes shimmer
  100%
    transform: translateX(100%)
</style>
