import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { ProjectPostType, IContentDocument } from '@/utils/types';

interface UseProjectsComposables {
  getProjects(): Promise<void>
  projects: ComputedRef<
    (ProjectPostType & IContentDocument) |
    (ProjectPostType & IContentDocument)[] |
    null
  >
}

const projects = ref<(ProjectPostType & IContentDocument) |
                        (ProjectPostType & IContentDocument)[] |
                        null>([]);

async function getProjects() {
  const { $content } = useContext();

  projects.value = await $content('projects')
    .only(['title', 'thumbnail', 'excerpt', 'path'])
    .sortBy('date', 'desc')
    .fetch<ProjectPostType>();
}

export function useProjects(): UseProjectsComposables {
  return {
    getProjects,
    projects: computed(() => projects.value),
  };
}
