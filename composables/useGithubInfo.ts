import { ref, useFetch, Ref } from '@nuxtjs/composition-api';

import { GITHUB_API } from '@/utils/consts';
import { GithubRepositoryParams } from '@/utils/types';

export type UseGithubInfoComposableReturn = {
  stars: Ref<Number>
}

export function useGithubInfo(params: GithubRepositoryParams): UseGithubInfoComposableReturn {
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
