import { ref, useFetch, Ref } from '@nuxtjs/composition-api';

import { GITHUB_API } from '@/utils/consts';
import { GithubRepositoryParams } from '@/utils/types';

interface UseGithubInfoComposable {
  stars: Ref<Number>
}

export const useGithubInfo = (params: GithubRepositoryParams): UseGithubInfoComposable => {
  const stars = ref<Number>(0);

  useFetch(async () => {
    const response = await fetch(`${GITHUB_API}/${params.username}/${params.reponame}`);
    const github = await response.json();
    stars.value = github?.stargazers_count;
  });

  return {
    stars,
  };
};
