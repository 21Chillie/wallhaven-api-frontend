import type { AxiosResponse } from "axios";
import imageApi from "../config/axiosInstance.config";
import type { WallhavenSearchResponse } from "../types/apiResponse.types";
import type { SearchParamsType } from "../types/searchParam.types";

const apiService = {
  search: async (
    searchParams: Partial<SearchParamsType>,
  ): Promise<WallhavenSearchResponse> => {
    const res: AxiosResponse<WallhavenSearchResponse> = await imageApi.get(
      "/search",
      {
        params: searchParams,
      },
    );

    return res.data;
  },
};

export default apiService;
