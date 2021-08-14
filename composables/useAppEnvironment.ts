import { ENVIRONMENT } from '@/utils/consts';

interface UseAppEnvironemnt {
  currentEnviroment: string | undefined
  isDev: boolean
}

export const useAppEnvironment = (): UseAppEnvironemnt => {
  const currentEnviroment = ENVIRONMENT;
  const isDev = currentEnviroment === 'development';

  return {
    currentEnviroment,
    isDev,
  };
};
