/* eslint-disable no-unused-vars */
import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { ProjectPostType } from '@/utils/types';

export type GetProjectsOptions = {
  limit: number
}

export type UseProjectsComposableReturn = {
  getProjects(options: GetProjectsOptions): Promise<void>
  projects: ComputedRef<ProjectPostType[] | null>
  isLoading: ComputedRef<Boolean>
  isEmpty: ComputedRef<Boolean>
}

export function useProjects(): UseProjectsComposableReturn {
  const { $content } = useContext();

  const projects = ref<ProjectPostType[]>([]);
  const isLoading = ref<Boolean>(false);

  /**
   * Get projects list from 'projects' content sorted by priority.\
   * List will be available in `projects` reactive property
   */
  async function getProjects(options: GetProjectsOptions): Promise<void> {
    isLoading.value = true;
    projects.value = (await $content('projects')
      .only(['title', 'npm', 'github', 'description', 'path'])
      .sortBy('priority', 'asc')
      .limit(options.limit)
      .fetch<ProjectPostType>()) as Array<ProjectPostType>;
    isLoading.value = false;
  }

  return {
    getProjects,
    projects: computed(() => projects.value),
    isLoading: computed(() => isLoading.value),
    isEmpty: computed(() => projects.value?.length === 0),
  };
}
