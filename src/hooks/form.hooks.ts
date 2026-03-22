import { useForm } from "@tanstack/react-form";
import type { SearchParamsType } from "../types/searchParam.types";

function useTanstackForm(
  setFilters: React.Dispatch<React.SetStateAction<Partial<SearchParamsType>>>,
) {
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

  const { handleSubmit, Subscribe, Field } = useForm({
    defaultValues: formDefaultValues,
    onSubmit: async ({ value }) => {
      // Transform the data for the API request
      const payload = {
        ...value,
        categories: value.categories?.value,
        purity: value.purity?.value,
      };

      setFilters(payload as Partial<SearchParamsType>);
    },
  });

  return { handleSubmit, Subscribe, Field };
}

export default useTanstackForm;
