import { useQuery } from "@tanstack/react-query";
import type { SearchParamsType } from "../types/searchParam.types";
import apiService from "../services/api.service";
import toast from "react-hot-toast";

function UseTanstackQuery(params: Partial<SearchParamsType>) {
  const { isPending, data, isError, error } = useQuery({
    queryKey: ["wallpapers", params],
    queryFn: async () => await apiService.search(params),
    enabled: params.q ? params.q.length > 0 : false,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  if (isError) {
    toast.error(error.message);
  }

  // DEBUG
  // console.log(data ? "query success" : "query failed");
  return { isPending, data };
}

export default UseTanstackQuery;
