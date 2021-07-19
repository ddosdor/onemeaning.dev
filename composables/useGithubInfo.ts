import { ref, useFetch, Ref } from '@nuxtjs/composition-api';
import axios from 'axios';

import { GITHUB_API } from '@/utils/consts';
import { GithubRepositoryParams } from '@/utils/types';

interface UseGithubInfoComposable {
  stars: Ref<Number>
}

export const useGithubInfo = (params: GithubRepositoryParams): UseGithubInfoComposable => {
  const stars = ref<Number>(0);

  useFetch(async () => {
    const github = await axios.get(`${GITHUB_API}/${params.username}/${params.reponame}`);
    stars.value = github?.data?.stargazers_count;
  });

  return {
    stars,
  };
};
