import { useContext, createContext, type ReactNode, useState } from "react";
import useTanstackQuery from "./query.hooks";
import useTanstackForm from "./form.hooks";
import type { SearchContextType } from "../types/searchContext.types";
import type { SearchParamsType } from "../types/searchParam.types";

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Partial<SearchParamsType>>({});

  const form = useTanstackForm(setFilters);
  const query = useTanstackQuery(filters);

  return <SearchContext value={{ form, query }}>{children}</SearchContext>;
}

export function UseSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }

  return context;
}
