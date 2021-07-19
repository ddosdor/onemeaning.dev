import { ref, useFetch, Ref } from '@nuxtjs/composition-api';
import axios from 'axios';

import { NPM_API } from '@/utils/consts';
import { NpmPackageParams } from '@/utils/types';

interface UseNpmWeeklyDownloads {
  weeklyDownloads: Ref<Number>
}

export const useNpmWeeklyDownloads = (params: NpmPackageParams): UseNpmWeeklyDownloads => {
  const weeklyDownloads = ref<Number>(0);

  useFetch(async () => {
    const npm = await axios.get(`${NPM_API}/downloads/point/last-week/${params.package}`);
    weeklyDownloads.value = npm?.data?.downloads;
  });

  return {
    weeklyDownloads,
  };
};
