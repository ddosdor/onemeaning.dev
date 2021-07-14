<template>
  <div>
    Projects<br>
    {{ projects }}
  </div>
</template>

<script>
import { defineComponent, useAsync } from '@nuxtjs/composition-api';

import { useProjects } from '@/composables';

export default defineComponent({
  setup() {
    const { projects, getProjects } = useProjects();
    useAsync(() => getProjects());
    return {
      projects,
    };
  },
});
</script>
