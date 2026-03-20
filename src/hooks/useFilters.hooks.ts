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
  // Initial state of active value for filter parameters in Search Form Component
  const [params, setParams] = useState<Partial<SearchParamsType>>({
    categories: undefined,
    purity: undefined,
    sorting: undefined,
    order: undefined,
    ratios: undefined,
    resolutions: undefined,
    colors: undefined,
    page: 1,
  });

  // All function below is to handle value for each parameter
  // The value will be store in params state for set the label for menu dropdown for filter params in SearchForm component (for better UX)
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
