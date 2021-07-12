<template>
  <section class="UiPageSection mb-20">
    <slot />
  </section>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'UiPageSection',
});
</script>
