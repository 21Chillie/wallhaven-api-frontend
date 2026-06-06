import ButtonSubmit from "@components/ButtonForm";
import FilterField from "@components/FilterField";
import SearchField from "@components/SearchField";
import { fieldContext, formContext } from "@hooks/useFormContext";
import { createFormHook } from "@tanstack/react-form";
import { setParams } from "@store/useSearchParamsStore";
import type { SearchParams } from "~/types/global.type";

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    SearchField,
    FilterField,
  },
  formComponents: {
    ButtonSubmit,
  },
});

const defaultValues: Partial<SearchParams> = {
  q: "",
  categories: "111",
  purity: "111",
  sorting: "relevance",
  order: "desc",
  ratios: undefined,
  resolutions: undefined,
  colors: undefined,
  page: 1,
};

export function useSearchForm() {
  const form = useAppForm({
    defaultValues,
    onSubmit: ({ value }) => {
      const params = new URLSearchParams();

      Object.entries(value).forEach(([key, value]) => {
        if (value) params.set(key, String(value));
      });

      setParams(value);
      window.history.pushState(null, "", `/search?${params.toString()}`);
    },
  });

  return form;
}
