import { useState } from "react";
import type {
  SearchParamsType,
  BitFlagType,
  OrderOptionType,
  SortingOptionType,
  RatioKeyType,
  ResolutionValueType,
} from "../types/searchParam.types";

export function useFilters() {
  const [params, setParams] = useState<SearchParamsType>({
    categories: undefined,
    purity: undefined,
    sorting: undefined,
    order: undefined,
    ratios: "16x9",
    resolutions: undefined,
    colors: undefined,
    page: 1,
  });

  const changeCategoryLabel = (label: string, value: BitFlagType) => {
    setParams((prev) => ({ ...prev, categories: { label, value } }));
  };

  const changePurityLabel = (label: string, value: BitFlagType) => {
    setParams((prev) => ({ ...prev, purity: { label, value } }));
  };

  const changeSortingLabel = (sorting: SortingOptionType) => {
    setParams((prev) => ({ ...prev, sorting }));
  };

  const changeOrderLabel = (order: OrderOptionType) => {
    setParams((prev) => ({ ...prev, order }));
  };

  const changeRatioLabel = (ratios: RatioKeyType) => {
    setParams((prev) => ({ ...prev, ratios }));
  };

  const changeResolutionLabel = (resolutions: ResolutionValueType) => {
    setParams((prev) => ({ ...prev, resolutions }));
  };

  console.log(params);

  return {
    params,
    changeCategoryLabel,
    changePurityLabel,
    changeSortingLabel,
    changeOrderLabel,
    changeRatioLabel,
    changeResolutionLabel,
  };
}
