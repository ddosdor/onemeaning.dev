import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { ProjectPostType } from '@/utils/types';
import { RECENT_PROJECTS_LIST_LIMIT } from '@/utils/consts';

interface UseProjectsComposable {
  getRecentProjects(): Promise<void>
  recentProjects: ComputedRef<ProjectPostType[] | null>
  isLoadingRecentProjects: ComputedRef<Boolean>
  isRecentProjectsEmpty: ComputedRef<Boolean>
}

const recentProjects = ref<ProjectPostType[]>([]);
const isLoadingRecentProjects = ref<Boolean>(false);
const isRecentProjectsEmpty = computed(() => recentProjects.value?.length === 0);

export const useProjects = (): UseProjectsComposable => {
  const { $content } = useContext();

  /**
   * Get recent projects list from 'projects' content sorted by priority.\
   * List will be available in `recentProijects` reactive property
   */
  const getRecentProjects = async (): Promise<void> => {
    if (isRecentProjectsEmpty.value) {
      isLoadingRecentProjects.value = true;
      recentProjects.value = (await $content('projects')
        .only(['title', 'npm', 'github', 'description', 'path'])
        .sortBy('priority', 'asc')
        .limit(RECENT_PROJECTS_LIST_LIMIT)
        .fetch<ProjectPostType>()) as Array<ProjectPostType>;
      isLoadingRecentProjects.value = false;
    }
  };

  return {
    getRecentProjects,
    recentProjects: computed(() => recentProjects.value),
    isLoadingRecentProjects: computed(() => isLoadingRecentProjects.value),
    isRecentProjectsEmpty,
  };
};
