import { PURITY_OPTIONS } from "../filterParameterValues";
import { IoIosArrowDown } from "react-icons/io";
import type {
  SearchParamsType,
  BitFlagType,
} from "../../../../../types/searchParam.types";

type PurityFilterProps = {
  params: Partial<SearchParamsType>;
  changePurityLabel: (label: string, value: BitFlagType) => void;
};

export function PurityFilter({ params, changePurityLabel }: PurityFilterProps) {
  const { purity } = params;

  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost text-base-content/70 hover:text-base-content focus-within:text-base-content border-base-content/15 flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span>{purity?.label || "Purity"}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {PURITY_OPTIONS.map((opt) => {
          const { label, value } = opt;

          return (
            <li key={label}>
              <input
                className="btn btn-ghost flex justify-start font-normal"
                type="radio"
                name="purity"
                id="purity"
                value={value}
                aria-label={label}
                checked={purity?.value === value}
                onChange={() => changePurityLabel(label, value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
