import type { SearchParamsType } from "../types/searchParam.types";
import { useState } from "react";
import UseTanstackQuery from "./query.hooks";
import useTanstackForm from "./form.hooks";

function useSearch() {
  const [filters, setFilters] = useState<Partial<SearchParamsType>>({});

  const form = useTanstackForm(setFilters);
  const query = UseTanstackQuery(filters);

  return { form, query };
}
 
export default useSearch;
