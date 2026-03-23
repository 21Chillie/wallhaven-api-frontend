import { useInfiniteQuery } from "@tanstack/react-query";
import type { SearchParamsType } from "../types/searchParam.types";
import apiService from "../services/api.service";
import type { WallhavenMeta } from "../types/apiResponse.types";

function useTanstackQuery(params: Partial<SearchParamsType>) {
  // const { isPending, data, isError, error, isFetching } = useQuery({
  //   queryKey: ["wallpapers", params],
  //   queryFn: async () => await apiService.search(params),
  //   enabled: params.q ? params.q.length > 0 : false,
  //   staleTime: 1000 * 60 * 5,
  //   // retry: false,
  // });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    fetchStatus,
    error,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["wallpapers", params],
    queryFn: ({ pageParam }) => apiService.search(params, pageParam),
    initialPageParam: 1,
    enabled: params.q ? params.q.length > 0 : false,
    // This function tells the hook how to get the next page number
    getNextPageParam: (lastPage) => {
      const { current_page, last_page } = lastPage.meta as WallhavenMeta;
      return current_page < last_page ? current_page + 1 : undefined;
    },
    staleTime: 1000 * 60 * 5,
  });

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isError,
    fetchStatus,
    error,
    isFetching,
  };
}

export default useTanstackQuery;
