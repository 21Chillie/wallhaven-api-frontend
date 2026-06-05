import SearchField from "@components/form-filter/SearchField";
import { fieldContext, formContext } from "@hooks/useFormContext";
import { createFormHook } from "@tanstack/react-form";
import type { SearchParams } from "~/types/global.type";

const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    SearchField,
  },
  formComponents: {},
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

      window.history.pushState(null, "", `/search?${params.toString()}`);
    },
  });

  return form;
}
