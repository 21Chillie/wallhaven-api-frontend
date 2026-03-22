import { CATEGORY_OPTIONS } from "../filterParameterValues";
import { IoIosArrowDown } from "react-icons/io";
import type {
  SearchParamsType,
  BitFlagType,
  CategoryOrPurityParamType,
} from "../../../../../types/searchParam.types";

type CategoryFilterProps = {
  params: Partial<SearchParamsType>;
  changeCategoryLabel: (label: string, value: BitFlagType) => void;
  onChange: (category: CategoryOrPurityParamType) => void;
};

export function CategoryFilter({
  params,
  changeCategoryLabel,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost border-base-content/10 text-base-content/70 hover:text-base-content focus-within:text-base-content flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span>{params?.categories?.label || "Category"}</span>
        <span>
          <IoIosArrowDown />
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {CATEGORY_OPTIONS.map((opt) => {
          const { label, value } = opt;

          return (
            <li key={label}>
              <input
                className="btn btn-ghost flex justify-start font-normal"
                type="radio"
                name="category"
                id="category"
                value={value}
                aria-label={label}
                checked={params?.categories?.value === value}
                onChange={() => {
                  changeCategoryLabel(label, value);
                  onChange({ label, value });
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
