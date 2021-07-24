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
    customClass: {
      type: String,
      default: 'h-6 w-6',
    },
  },
});
</script>
