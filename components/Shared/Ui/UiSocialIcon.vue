<template>
  <span class="UiSocialIcon"
        v-html="svgIcon"
  />
</template>

<script lang="ts">
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiSocialIcon',
  props: {
    github: Boolean,
    twitter: Boolean,
    linkedin: Boolean,
    npm: Boolean,
  },
  setup(props) {
    const svgIcon = ref<String | null>(null);
    switch (true) {
      case props.github: svgIcon.value = require('./icons/github.svg?include'); break;
      case props.twitter: svgIcon.value = require('./icons/twitter.svg?include'); break;
      case props.linkedin: svgIcon.value = require('./icons/linkedin.svg?include'); break;
      case props.npm: svgIcon.value = require('./icons/npm.svg?include'); break;
      default: svgIcon.value = null;
    }

    return {
      svgIcon,
    };
  },
});
</script>

<style lang="sass">
.UiSocialIcon
  &:hover
    path
      fill: $link-color

  @apply cursor-pointer transition duration-150
</style>
