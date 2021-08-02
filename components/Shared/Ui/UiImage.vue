<template>
  <figure :key="src">
    <picture>
      <source v-if="mobile"
              media="(max-width: 768px)"
              :srcset="`${mobile}?webp`"
              v-bind="$attrs"
              type="image/webp"
      >
      <source v-if="src"
              media="(min-width: 769px)"
              :srcset="`${src}?webp`"
              v-bind="$attrs"
              type="image/webp"
      >
      <img :class="customClass"
           :src="src"
           :srcset="srcSet"
           v-bind="$attrs"
      >
    </picture>
  </figure>
</template>

<script lang="ts">
/* eslint-disable global-require */
import { defineComponent, ref, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      default: null,
    },
    customClass: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const srcMobile = ref<String>('');
    srcMobile.value = `${props.mobile}, ${props.src} 2x`;

    return {
      srcSet: computed(() => (props.mobile ? srcMobile.value : props.src)),
    };
  },
});
</script>
