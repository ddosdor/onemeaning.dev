<template>
  <div>
    Projects
  </div>
</template>

<script>
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api';

import { ProjectPostType } from '@/utils/types';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const projects = useAsync(() => $content('projects')
      .sortBy('date', 'desc')
      .limit(4)
      .fetch<ProjectPostType>());
    return { projects };
  },
});
</script>
