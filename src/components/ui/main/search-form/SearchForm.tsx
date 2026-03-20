import { IoSearch } from "react-icons/io5";
import { useFilters } from "../../../../hooks/useFilters.hooks";
import {
  CategoryFilter,
  PurityFilter,
  SortingFilter,
  OrderFilter,
  RatioFilter,
  ResolutionFilter,
} from "./filters";

export function SearchForm() {
  const {
    params,
    changeCategoryLabel,
    changePurityLabel,
    changeSortingLabel,
    changeOrderLabel,
    changeRatioLabel,
    changeResolutionLabel,
  } = useFilters();

  return (
    <>
      <form>
        {/* Search Query */}
        <label
          className="input input-lg input-ghost outline-primary/50 focus-within:outline-primary/50 focus-within:border-primary/50 border-base-content/15 w-full pr-1.5 text-base font-medium"
          htmlFor="searchQuery"
        >
          <input
            className="grow"
            type="text"
            name="searchQuery"
            id="searchQuery"
            placeholder="Search high-resolution wallpapers"
          />

          <button
            className="bg-primary/90 hover:bg-primary grid place-items-center rounded-sm p-2 text-base text-gray-50 transition-colors"
            type="submit"
          >
            <IoSearch></IoSearch>
          </button>
        </label>

        {/* Filter Parameters */}
        <div className="border-base-content/15 mt-12 hidden border-t pt-4 md:block">
          <ul className="border-base-content/10 flex flex-wrap gap-2">
            <CategoryFilter
              params={params}
              changeCategoryLabel={changeCategoryLabel}
            ></CategoryFilter>

            <PurityFilter
              params={params}
              changePurityLabel={changePurityLabel}
            ></PurityFilter>

            <SortingFilter
              params={params}
              changeSortingLabel={changeSortingLabel}
            ></SortingFilter>

            <OrderFilter
              params={params}
              changeOrderLabel={changeOrderLabel}
            ></OrderFilter>

            <RatioFilter
              params={params}
              changeRatioLabel={changeRatioLabel}
            ></RatioFilter>

            <ResolutionFilter
              params={params}
              changeResolutionLabel={changeResolutionLabel}
            ></ResolutionFilter>

            <div className="divider divider-horizontal mx-1 h-8 self-center"></div>

            <button type="button" className="btn btn-primary btn-soft text-sm">
              Apply filters
            </button>
          </ul>
        </div>
      </form>
    </>
  );
}
