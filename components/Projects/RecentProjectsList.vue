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
import { defineComponent } from '@nuxtjs/composition-api';

import { useProjects } from '@/composables/useProjects';
import { RECENT_PROJECTS_LIST_LIMIT } from '@/utils/consts';

export default defineComponent({
  name: 'RecentProjectsList',
  setup() {
    const { projects: recentProjects, getProjects } = useProjects();

    getProjects({ limit: RECENT_PROJECTS_LIST_LIMIT });

    return { recentProjects };
  },
});
</script>
