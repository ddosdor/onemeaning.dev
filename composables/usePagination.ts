import {
  computed, useRouter, watchEffect, useRoute, ComputedRef,
} from '@nuxtjs/composition-api';

export type UsePaginationComposableReturn = {
  nextPage(): void
  previousPage(): void,
  currentPage: ComputedRef<String>
}

export function usePagination(): UsePaginationComposableReturn {
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

  function nextPage(): void {
    const { page } = route.value.query;
    const newPage = String(Number(page) + 1);
    updateUrlQuery(newPage);
  }

  function previousPage(): void {
    const { page } = route.value.query;
    if (Number(page) > 1) {
      const newPage = String(Number(page) - 1);
      updateUrlQuery(newPage);
    }
  }

  return {
    nextPage,
    previousPage,
    currentPage: computed(() => String(route.value.query?.page)),
  };
};
