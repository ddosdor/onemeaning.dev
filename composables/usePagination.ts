import { useRouter, useRoute } from '@nuxtjs/composition-api';

interface UsePaginationComposable {
  nextPage(): void
  previousPage(): void
}

export const usePagination = (): UsePaginationComposable => {
  const router = useRouter();
  const route = useRoute();

  const nextPage = (): void => {
    const { page } = route.value.query;
    const newPage = page || 1;
    router.push({
      query: {
        ...route.value.query,
        page: String(Number(newPage) + 1),
      },
    });
  };

  const previousPage = (): void => {
    const { page } = route.value.query;
    const newPage = page || 1;
    router.push({
      query: {
        ...route.value.query,
        page: String(Number(newPage) - 1),
      },
    });
  };

  return {
    nextPage,
    previousPage,
  };
};
