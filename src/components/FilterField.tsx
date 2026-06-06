import { useFieldContext } from "@hooks/useFormContext";
import { ChevronDown } from "lucide-react";
import { Activity } from "react";

type FilterParams = { label: string; value: string };

export default function FilterField({
  filterParams,
  type,
}: {
  filterParams: FilterParams[];
  type: "Category" | "Purity" | "Sort by" | "Order" | "Ratio" | "Resolution";
}) {
  const { state, name, handleChange } = useFieldContext<string>();
  const currentLabel = filterParams.find(
    (param) => param.value === state.value
  );

  return (
    <div className="dropdown">
      <button
        className="btn btn-sm btn-ghost border-base-content/10 text-base-content/70 hover:text-base-content focus-within:text-base-content flex items-center font-medium capitalize transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true">
        <span>
          {state.value === "111"
            ? type
            : currentLabel?.label || state.value || type}
        </span>

        <ChevronDown className="size-4" />
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-40 rounded-sm border shadow-sm">
        {/* This is for ratio and resolution filter */}
        {/* Option for all ratio/resolution */}
        {/* It hidden when the type is not "Resolution" or "Ratio" */}
        <Activity
          mode={
            type === "Resolution" || type === "Ratio" ? "visible" : "hidden"
          }>
          <li>
            <input
              className={`btn btn-sm flex justify-start font-medium capitalize ${!state.value ? "btn-accent" : "btn-ghost"}`}
              type="radio"
              name={name}
              id={`all-${type}`}
              value={""}
              aria-label={`All ${type}`}
              onChange={() => {
                handleChange("");
              }}
            />
          </li>
        </Activity>

        {filterParams.map((param) => {
          // Check if API key is not provided and Purity filter param value is "001" (NSFW)
          // If api is not provided then hide NSFW filter option
          if (
            type === "Purity" &&
            !import.meta.env.VITE_API_KEY &&
            param.value === "001"
          ) {
            return (
              <li key={param.label}>
                <div
                  className="tooltip tooltip-bottom text-sm"
                  data-tip="No API key provided">
                  <input
                    className={`btn btn-sm flex justify-start font-medium capitalize ${state.value === param.value ? "btn-accent" : "btn-ghost"}`}
                    type="radio"
                    name={name}
                    id={`${name}-${param.value}`}
                    value={param.value}
                    aria-label={param.label}
                    disabled={true}
                    onChange={() => {
                      handleChange(param.value);
                    }}
                  />
                </div>
              </li>
            );
          }

          return (
            <li key={param.label}>
              <input
                className={`btn btn-sm flex justify-start font-medium capitalize ${state.value === param.value ? "btn-accent" : "btn-ghost"}`}
                type="radio"
                name={name}
                id={`${name}-${param.value}`}
                value={param.value}
                aria-label={param.value === "111" ? `All ${type}` : param.label}
                onChange={() => {
                  handleChange(param.value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
