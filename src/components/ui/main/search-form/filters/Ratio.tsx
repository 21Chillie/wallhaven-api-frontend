import { IoIosArrowDown } from "react-icons/io";
import { RESOLUTION_GROUPS } from "../filterParameterValues";
import type {
  RatioKeyType,
  SearchParamsType,
} from "../../../../../types/searchParam.types";

export function RatioFilter({
  params,
  changeRatioLabel,
  onChange,
}: {
  params: Partial<SearchParamsType>;
  changeRatioLabel: (ratios: RatioKeyType) => void;
  onChange: (ratios: RatioKeyType) => void;
}) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost text-base-content/70 hover:text-base-content focus-within:text-base-content border-base-content/15 flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span>{params.ratios || "Ratios"}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {(Object.keys(RESOLUTION_GROUPS) as RatioKeyType[]).map((value) => {
          return (
            <li key={value}>
              <input
                className="btn btn-ghost flex justify-start font-normal"
                type="radio"
                name="ratio"
                id="ratio"
                value={value}
                aria-label={value}
                checked={params.ratios === value}
                onChange={() => {
                  changeRatioLabel(value);
                  onChange(value);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
