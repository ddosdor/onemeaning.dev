import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { ProjectPostType, IContentDocument } from '@/utils/types';
import { RECENT_PROJECTS_LIST_LIMIT } from '@/utils/consts';

interface UseProjectsComposable {
  getRecentProjects(): Promise<void>
  getProjects(): Promise<void>
  recentProjects: ComputedRef<
    (ProjectPostType & IContentDocument) |
    (ProjectPostType & IContentDocument)[] |
    null
  >
  projects: ComputedRef<
    (ProjectPostType & IContentDocument) |
    (ProjectPostType & IContentDocument)[] |
    null
  >
  isLoadingRecentProjects: ComputedRef<Boolean>
  isRecentProjectsEmpty: ComputedRef<Boolean>
}

const projects = ref<(ProjectPostType & IContentDocument) |
                     (ProjectPostType & IContentDocument)[] |
                     null>([]);
const recentProjects = ref<(ProjectPostType & IContentDocument) |
                           (ProjectPostType & IContentDocument)[] |
                           null>([]);
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
      recentProjects.value = await $content('projects')
        .only(['title', 'npm', 'github', 'description'])
        .sortBy('priority', 'asc')
        .limit(RECENT_PROJECTS_LIST_LIMIT)
        .fetch<ProjectPostType>();
      isLoadingRecentProjects.value = true;
    }
  };

  const getProjects = async (): Promise<void> => {
    projects.value = await $content('projects')
      .only(['title', 'thumbnail', 'excerpt', 'path'])
      .sortBy('date', 'desc')
      .fetch<ProjectPostType>();
  };

  return {
    getRecentProjects,
    getProjects,
    recentProjects: computed(() => recentProjects.value),
    projects: computed(() => projects.value),
    isLoadingRecentProjects: computed(() => isLoadingRecentProjects.value),
    isRecentProjectsEmpty,
  };
};
