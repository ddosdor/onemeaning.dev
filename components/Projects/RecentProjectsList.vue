<template>
  <div class="RecentProjectsList mt-6 grid grid-cols-0 grid-flow-row gap-12
              md:grid-cols-2
              "
  >
    <ProjectsRecentProjectsListItem v-for="(recentProject, index) in recentProjects"
                                    :key="`recent-project-${index}`"
                                    :recent-project="recentProject"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api';

import { useProjects } from '@/composables/useProjects';

export default defineComponent({
  name: 'RecentProjectsList',
  setup() {
    const { recentProjects, getRecentProjects } = useProjects();

    useAsync(() => getRecentProjects());

    return { recentProjects };
  },
});
</script>
