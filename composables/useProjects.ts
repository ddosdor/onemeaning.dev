import {
  ref, computed, ComputedRef, useContext,
} from '@nuxtjs/composition-api';
import { ProjectPostType, IContentDocument } from '@/utils/types';

interface UseProjectsComposable {
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

const getProjects = async (): Promise<void> => {
  const { $content } = useContext();

  projects.value = await $content('projects')
    .only(['title', 'thumbnail', 'excerpt', 'path'])
    .sortBy('date', 'desc')
    .fetch<ProjectPostType>();
};

export const useProjects = (): UseProjectsComposable => ({
  getProjects,
  projects: computed(() => projects.value),
});
