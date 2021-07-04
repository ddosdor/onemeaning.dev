<template>
  <div>
    <PageHeader />
    <Nuxt />
    <PageFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import PageHeader from '@/components/Common/PageHeader.vue';
import PageFooter from '@/components/Common/PageFooter.vue';

export default defineComponent({
  components: {
    PageHeader,
    PageFooter,
  },
  setup() {

  },
});
</script>
