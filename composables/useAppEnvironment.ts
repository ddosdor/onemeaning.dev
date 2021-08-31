import { ENVIRONMENT } from '@/utils/consts';

export type UseAppEnvironemntComposableReturn = {
  currentEnviroment: string | undefined
  isDev: boolean
}

export function useAppEnvironment(): UseAppEnvironemntComposableReturn {
  const currentEnviroment = ENVIRONMENT;
  const isDev = currentEnviroment === 'development';

  return {
    currentEnviroment,
    isDev,
  };
};
