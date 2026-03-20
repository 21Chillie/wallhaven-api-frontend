import { ORDER_OPTIONS } from "../filterParameterValues";
import { IoIosArrowDown } from "react-icons/io";
import type {
  SearchParamsType,
  OrderOptionType,
} from "../../../../../types/searchParam.types";

type OrderFilterProps = {
  params: Partial<SearchParamsType>;
  changeOrderLabel: (order: OrderOptionType) => void;
};

export function OrderFilter({ params, changeOrderLabel }: OrderFilterProps) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-ghost text-base-content/70 hover:text-base-content focus-within:text-base-content border-base-content/15 flex items-center font-medium transition-colors duration-300"
        tabIndex={0}
        aria-haspopup="true"
      >
        <span className="capitalize">{params.order || "Order"}</span>
        <span>
          <IoIosArrowDown></IoIosArrowDown>
        </span>
      </button>

      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-100 border-base-content/10 mt-2 w-48 rounded-sm border"
      >
        {ORDER_OPTIONS.map(({ value }) => {
          return (
            <li key={value}>
              <input
                className="btn btn-ghost flex justify-start font-normal capitalize"
                type="radio"
                name="order"
                id="order"
                value={value}
                aria-label={value}
                checked={params.order === value}
                onChange={() => changeOrderLabel(value)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
