import { useFieldContext } from "@hooks/useFormContext";
import { Search, X } from "lucide-react";

export default function SearchField() {
  const { name, state, handleBlur, handleChange } = useFieldContext<string>();
  const searchError = state.meta.errors[0];

  return (
    <fieldset className="fieldset">
      <label
        className={`focus-within:outline-accent/40 focus-within:border-accent/60 input input-lg input-ghost border-base-content/10 w-full pr-1.5 text-sm font-medium`}>
        <input
          className="grow"
          type="search"
          id={name}
          name={name}
          value={state.value}
          onChange={(e) => handleChange(e.target.value)}
          onBlur={handleBlur}
          placeholder="Search keywords *"
          autoComplete="off"
          aria-label="Search wallpapers"
        />

        {state.value && (
          <button
            onClick={() => handleChange("")}
            type="button"
            className="btn btn-sm btn-ghost btn-circle">
            <X className="size-4" />
          </button>
        )}

        <button
          type="submit"
          className="btn btn-square bg-accent hover:bg-accent/80 text-accent-content rounded-sm p-2 transition-colors"
          aria-label="Submit wallpaper search">
          <Search className="size-5" />
        </button>
      </label>
      {searchError ? (
        <p className="label text-error whitespace-normal">{searchError}</p>
      ) : null}
    </fieldset>
  );
}
