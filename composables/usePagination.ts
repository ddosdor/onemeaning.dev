import { useRouter, watchEffect, useRoute } from '@nuxtjs/composition-api';

interface UsePaginationComposable {
  nextPage(): void
  previousPage(): void
}

export const usePagination = (): UsePaginationComposable => {
  const router = useRouter();
  const route = useRoute();

  const updateUrlQuery = (newPage: string) => {
    router.push({
      query: {
        ...route.value.query,
        page: newPage,
      },
    });
  };

  watchEffect(
    () => {
      if (Number(route.value.query?.page) <= 0) {
        router.push({
          query: {
            ...route.value.query,
            page: '1',
          },
        });
      }
    },
  );

  const nextPage = (): void => {
    const { page } = route.value.query;
    const newPage = String(Number(page) + 1);
    updateUrlQuery(newPage);
  };

  const previousPage = (): void => {
    const { page } = route.value.query;
    if (Number(page) > 1) {
      const newPage = String(Number(page) - 1);
      updateUrlQuery(newPage);
    }
  };

  return {
    nextPage,
    previousPage,
  };
};
