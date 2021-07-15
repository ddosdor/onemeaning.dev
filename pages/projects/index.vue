<template>
  <div>
    Projects<br>
    {{ projects }}
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

import { useProjects } from '@/composables';

export default defineComponent({
  setup() {
    const { projects, getProjects } = useProjects();
    getProjects();
    return {
      projects,
    };
  },
});
</script>
