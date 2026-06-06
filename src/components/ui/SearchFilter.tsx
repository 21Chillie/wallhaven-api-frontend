import {
  CATEGORY_OPTIONS,
  ORDER_OPTIONS,
  PURITY_OPTIONS,
  RATIO_OPTIONS,
  RESOLUTION_OPTIONS,
  SORTING_OPTIONS,
} from "@components/filterParamsValue";
import { useSearchForm } from "@hooks/useSearchForm";
import { Activity } from "react";
import { clearParams } from "~/store/useSearchParamsStore";

export default function SearchFilter() {
  const form = useSearchForm();
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const params = new URLSearchParams();

  return (
    <section
      id="search-form"
      className="bg-base-100 border-base-300 mx-auto my-8 max-w-6xl border p-6 shadow-sm max-xl:mx-4">
      <form
        onSubmit={handleSubmit}
        className="space-y-4">
        {/* Search */}
        <form.AppField
          name="q"
          validators={{
            onSubmit: ({ value }) =>
              !value ? "Search field cannot be empty!" : undefined,
            onChange: ({ value }) =>
              !value ? "Search field cannot be empty!" : undefined,
          }}>
          {(field) => <field.SearchField />}
        </form.AppField>

        <div className="gap flex flex-col justify-between gap-4 lg:flex-row">
          {/* All filters field */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Category */}
            <form.AppField name="categories">
              {(field) => (
                <field.FilterField
                  type="Category"
                  filterParams={CATEGORY_OPTIONS}
                />
              )}
            </form.AppField>

            {/* Purity */}
            <form.AppField name="purity">
              {(field) => (
                <field.FilterField
                  type="Purity"
                  filterParams={PURITY_OPTIONS}
                />
              )}
            </form.AppField>

            {/* Sorting */}
            <form.AppField name="sorting">
              {(field) => (
                <field.FilterField
                  type="Sort by"
                  filterParams={SORTING_OPTIONS}
                />
              )}
            </form.AppField>

            {/* Order */}
            <form.AppField name="order">
              {(field) => (
                <field.FilterField
                  type="Order"
                  filterParams={ORDER_OPTIONS}
                />
              )}
            </form.AppField>

            {/* Ratios */}
            <form.AppField name="ratios">
              {(field) => (
                <field.FilterField
                  type="Ratio"
                  filterParams={RATIO_OPTIONS}
                />
              )}
            </form.AppField>

            {/* Resolutions, only show when Ratio filter is fill */}
            <form.Subscribe selector={(state) => state.values.ratios}>
              {(ratio) => (
                <Activity mode={ratio ? "visible" : "hidden"}>
                  <form.AppField name="resolutions">
                    {(field) => (
                      <field.FilterField
                        type="Resolution"
                        filterParams={RESOLUTION_OPTIONS(ratio)}
                      />
                    )}
                  </form.AppField>
                </Activity>
              )}
            </form.Subscribe>
          </div>

          {/* Form Control */}
          <div className="flex items-center justify-end gap-3">
            <form.AppForm>
              <form.ButtonSubmit
                actionName="Apply Filters"
                btnSmall={true}
              />
            </form.AppForm>

            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => {
                form.reset();
                params.forEach((_, key) => {
                  params.delete(key);
                });

                clearParams();
                window.history.pushState(null, "", "/");
              }}>
              Clear all
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
