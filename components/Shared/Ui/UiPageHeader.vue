<template>
  <div class="UiPageHeader">
    <h1 v-if="main"
        class="UiPageHeader__title UiPageHeader__title--main"
    >
      {{ title }}
    </h1>
    <h2 v-if="!main">
      <RoughNotation :is-show="highlight"
                     type="highlight"
                     :color="color"
      >
        <span class="UiPageHeader__title">{{ title }}</span>
      </RoughNotation>
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useRandomHighlightColors } from '@/composables';

export default defineComponent({
  name: 'UiPageHeader',
  props: {
    main: Boolean,
    highlight: Boolean,
    title: {
      type: String,
      default: 'Hi, i\'m Header',
    },
  },
  setup() {
    const { color } = useRandomHighlightColors();
    return { color };
  },
});
</script>

<style lang="sass" scoped>
.UiPageHeader
  &__title
    &--main
      @apply text-xl
      @apply md:text-3xl
      @apply lg:text-4xl
    @apply font-extrabold text-center text-lg mb-4
    @apply md:text-left md:text-2xl md:mb-6
</style>
