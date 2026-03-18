import { SearchForm } from "../ui/main/search-form/SearchForm";

export function Main() {
  return (
    <>
      <main className="flex-1 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <SearchForm></SearchForm>
        </div>
      </main>
    </>
  );
}
