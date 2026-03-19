import { IoSearch } from "react-icons/io5";
import { FilterForm } from "./FilterForm";

export function SearchForm() {
  return (
    <>
      <form>
        {/* Search Query */}
        <label
          className="input focus-within:outline-primary/50 focus-within:border-primary/50 border-base-content/10 mb-12 w-full pr-1"
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
            type="button"
          >
            <IoSearch></IoSearch>
          </button>
        </label>

        <FilterForm></FilterForm>
      </form>
    </>
  );
}
