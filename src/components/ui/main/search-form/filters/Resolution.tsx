import type {
  RatioKeyType,
  ResolutionValueType,
  SearchParamsType,
} from "../../../../../types/searchParam.types";
import { IoIosArrowDown } from "react-icons/io";
import { RESOLUTION_GROUPS } from "../filterParameterValues";

export function ResolutionFilter({
  params,
  changeResolutionLabel,
}: {
  params: Partial<SearchParamsType>;
  changeResolutionLabel: (ratios: ResolutionValueType) => void;
}) {
  const resolutionsByRatio = RESOLUTION_GROUPS[params.ratios as RatioKeyType];

  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost text-base-content/70 hover:text-base-content focus-within:text-base-content border-base-content/10 flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span>{params.resolutions || "Resolution"}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {resolutionsByRatio.map((value) => {
          return (
            <li key={value}>
              <input
                className="btn btn-ghost flex justify-start font-normal"
                type="radio"
                name="ratio"
                id="ratio"
                value={value}
                aria-label={value}
                checked={params.resolutions === value}
                onChange={() => changeResolutionLabel(value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
