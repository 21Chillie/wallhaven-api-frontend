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
import useTanstackForm from "../../../../hooks/form.hooks";
import type {
  CategoryOrPurityParamType,
  OrderOptionType,
  RatioKeyType,
  ResolutionValueType,
  SortingOptionType,
} from "../../../../types/searchParam.types";
import z from "zod";

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

  const { Field, handleSubmit, Subscribe } = useTanstackForm();

  const searchSchema = z.string().min(1, "Search field cannot be empty!");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}
      >
        {/* Search Query */}
        <Field
          name="q"
          validators={{
            onSubmit: searchSchema,
          }}
          children={(field) => {
            const { errors } = field.state.meta;
            return (
              <>
                <label
                  className="input input-lg input-ghost outline-primary/50 focus-within:outline-primary/50 focus-within:border-primary/50 border-base-content/15 w-full pr-1.5 text-base font-medium"
                  htmlFor={field.name}
                >
                  <input
                    className="grow"
                    type="text"
                    name={field.name}
                    id={field.name}
                    placeholder="Search high-resolution wallpapers"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />

                  <button
                    className="bg-primary/90 hover:bg-primary grid place-items-center rounded-sm p-2 text-base text-gray-50 transition-colors"
                    type="submit"
                  >
                    <IoSearch></IoSearch>
                  </button>
                </label>

                {errors.length > 0 && (
                  <span className="text-error text-sm">
                    {errors[0]?.message}
                  </span>
                )}
              </>
            );
          }}
        ></Field>

        {/* Filter Parameters */}
        <div className="border-base-content/15 mt-12 hidden border-t pt-4 md:block">
          <ul className="border-base-content/10 flex flex-wrap gap-2">
            <Field
              name="categories"
              children={(field) => (
                <>
                  <CategoryFilter
                    params={params}
                    changeCategoryLabel={changeCategoryLabel}
                    onChange={(category: CategoryOrPurityParamType) =>
                      field.handleChange(category)
                    }
                  ></CategoryFilter>
                </>
              )}
            />

            <Field
              name="purity"
              children={(field) => (
                <>
                  <PurityFilter
                    params={params}
                    changePurityLabel={changePurityLabel}
                    onChange={(purity: CategoryOrPurityParamType) =>
                      field.handleChange(purity)
                    }
                  ></PurityFilter>
                </>
              )}
            />

            <Field
              name="sorting"
              children={(field) => (
                <>
                  <SortingFilter
                    params={params}
                    changeSortingLabel={changeSortingLabel}
                    onChange={(sort: SortingOptionType) =>
                      field.handleChange(sort)
                    }
                  ></SortingFilter>
                </>
              )}
            />

            <Field
              name="order"
              children={(field) => (
                <>
                  <OrderFilter
                    params={params}
                    changeOrderLabel={changeOrderLabel}
                    onChange={(order: OrderOptionType) =>
                      field.handleChange(order)
                    }
                  ></OrderFilter>
                </>
              )}
            />

            <Field
              name="ratios"
              children={(field) => (
                <>
                  <RatioFilter
                    params={params}
                    changeRatioLabel={changeRatioLabel}
                    onChange={(ratio: RatioKeyType) =>
                      field.handleChange(ratio)
                    }
                  ></RatioFilter>
                </>
              )}
            />

            <Subscribe
              selector={(state) => state.values.ratios}
              children={(ratios) =>
                ratios ? (
                  <Field
                    name="resolutions"
                    children={(field) => (
                      <>
                        <ResolutionFilter
                          params={params}
                          changeResolutionLabel={changeResolutionLabel}
                          onChange={(resolution: ResolutionValueType) =>
                            field.handleChange(resolution)
                          }
                        ></ResolutionFilter>
                      </>
                    )}
                  />
                ) : null
              }
            />

            <div className="divider divider-horizontal mx-1 h-8 self-center"></div>

            <Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting]}
              children={([canSubmit, isSubmitting]) => (
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn btn-primary btn-soft text-sm"
                >
                  {isSubmitting ? "Applying..." : "Apply filters"}
                </button>
              )}
            />
          </ul>
        </div>
      </form>
    </>
  );
}
