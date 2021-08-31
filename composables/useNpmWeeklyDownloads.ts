import { ref, useFetch, Ref } from '@nuxtjs/composition-api';

import { NPM_API } from '@/utils/consts';
import { NpmPackageParams } from '@/utils/types';

interface UseNpmWeeklyDownloadsComposableReturn {
  weeklyDownloads: Ref<Number>
}

export function useNpmWeeklyDownloads(params: NpmPackageParams): UseNpmWeeklyDownloadsComposableReturn {
  const weeklyDownloads = ref<Number>(0);

  useFetch(async () => {
    const response = await fetch(`${NPM_API}/downloads/point/last-week/${params.package}`);
    const npm = await response.json();
    weeklyDownloads.value = npm?.downloads;
  });

  return {
    weeklyDownloads,
  };
}
