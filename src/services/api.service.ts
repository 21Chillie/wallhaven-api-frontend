import type { AxiosResponse } from "axios";
import imageApi from "../config/axiosInstance.config";
import type { WallhavenSearchResponse } from "../types/apiResponse.types";
import type { SearchParamsType } from "../types/searchParam.types";

const apiService = {
  search: async (
    searchParams: Partial<SearchParamsType>,
    pageParam: number = 1,
  ): Promise<WallhavenSearchResponse> => {
    const res: AxiosResponse<WallhavenSearchResponse> = await imageApi.get(
      "/search",
      {
        params: { ...searchParams, page: pageParam },
      },
    );

    return res.data;
  },
};

export default apiService;
