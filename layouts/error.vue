<template>
  <div class="relative w-full">
    <LazySharedErrorInfo v-if="error.statusCode === 404"
                         title="Whoops! <br> Not sure where you are?"
                         :image="require('~/assets/images/error-400.png')"
    />
    <LazySharedErrorInfo v-else
                         title="I am just as surprised! <br> I don't know what's going on."
                         :image="require('~/assets/images/error-500.png')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { NuxtError } from '@nuxt/types';

export default defineComponent({
  layout: 'basic',
  props: {
    error: {
      type: {} as PropType<NuxtError>,
      default: () => ({} as NuxtError),
    },
  },
});
</script>
