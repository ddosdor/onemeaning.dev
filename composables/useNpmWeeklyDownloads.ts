import { ref, useFetch, Ref } from '@nuxtjs/composition-api';

import { NPM_API } from '@/utils/consts';
import { NpmPackageParams } from '@/utils/types';

interface UseNpmWeeklyDownloads {
  weeklyDownloads: Ref<Number>
}

export const useNpmWeeklyDownloads = (params: NpmPackageParams): UseNpmWeeklyDownloads => {
  const weeklyDownloads = ref<Number>(0);

  useFetch(async () => {
    const response = await fetch(`${NPM_API}/downloads/point/last-week/${params.package}`);
    const npm = await response.json();
    weeklyDownloads.value = npm?.downloads;
  });

  return {
    weeklyDownloads,
  };
};
