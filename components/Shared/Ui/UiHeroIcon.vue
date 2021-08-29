<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       fill="none"
       class="inline"
       :class="customClass"
       v-bind="$attrs"
       viewBox="0 0 24 24"
       stroke="currentColor"
  >
    <path v-if="chevronDoubleLeft"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
    />

    <path v-if="chevronDoubleRight"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
    />

    <path v-if="badgeCheck"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438
          0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806
          1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0
          01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0
          00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0
          010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />

    <path v-if="x"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiHeroicon',
  inheritAttrs: false,
  props: {
    chevronDoubleLeft: Boolean,
    chevronDoubleRight: Boolean,
    badgeCheck: Boolean,
    x: Boolean,
    customClass: {
      type: String,
      default: 'h-6 w-6',
    },
  },
});
</script>
