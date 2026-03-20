import { useForm } from "@tanstack/react-form";
import type { SearchParamsType } from "../types/searchParam.types";

function useTanstackForm() {
  const formDefaultValues: Partial<SearchParamsType> = {
    q: "",
    categories: undefined,
    purity: undefined,
    sorting: undefined,
    order: undefined,
    ratios: undefined,
    resolutions: undefined,
    page: 1,
  };

  const { Field, handleSubmit, Subscribe } = useForm({
    defaultValues: formDefaultValues,
    onSubmit: async ({ value }) => {
      // Transform the data for the API request
      const payload = {
        ...value,
        categories: value.categories?.value,
        purity: value.purity?.value,
      };

      console.log(payload);
    },
  });

  return { Field, handleSubmit, Subscribe };
}

export default useTanstackForm;
