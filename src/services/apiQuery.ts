import { wallhavenClient } from "@config/axios";
import { infiniteQueryOptions } from "@tanstack/react-query";
import type { WallhavenResponse } from "~/types/apiResponse.type";
import type { SearchParams } from "~/types/global.type";

export async function apiService(
  params: Partial<SearchParams>
): Promise<WallhavenResponse> {
  const response = await wallhavenClient.get<WallhavenResponse>("/search", {
    params,
  });

  return response.data;
}

export function apiQueryOptions(params: Partial<SearchParams>) {
  return infiniteQueryOptions({
    queryKey: ["wallpapers", params],
    queryFn: ({ pageParam }) => apiService({ ...params, page: pageParam }),
    initialPageParam: 1,
    // enabled: params.q ? params.q.length > 0 : false,
    getNextPageParam: (lastPage) => {
      const { current_page, last_page } = lastPage.meta;
      return current_page < last_page ? current_page + 1 : undefined;
    },
    staleTime: 1000 * 60 * 10,
    retry: false,
  });
}
