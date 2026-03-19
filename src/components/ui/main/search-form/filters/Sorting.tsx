import { useState } from "react";
import { SORTING_OPTIONS } from "../filterParameterValues";
import { IoIosArrowDown } from "react-icons/io";
import type {
  SearchParamsType,
  SortingOptionType,
} from "../../../../../types/searchParam.types";

type SortingFilterProps = {
  params: SearchParamsType;
  changeSortingLabel: (sorting: SortingOptionType) => void;
};

export function SortingFilter({
  params,
  changeSortingLabel,
}: SortingFilterProps) {
  const [label, setLabel] = useState("");

  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost text-base-content/70 hover:text-base-content focus-within:text-base-content border-base-content/15 flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span>{label || "Sort by"}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {SORTING_OPTIONS.map((opt) => {
          const { label, value } = opt;

          return (
            <li key={label}>
              <input
                className="btn btn-ghost flex justify-start font-normal"
                type="radio"
                name="sorting"
                id="sorting"
                value={value}
                aria-label={label}
                checked={params.sorting === value}
                onChange={() => {
                  changeSortingLabel(value);
                  setLabel(label);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
