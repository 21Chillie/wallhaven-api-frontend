import { useSearchForm } from "~/hooks/useSearchForm";

export default function SearchFilter() {
  const form = useSearchForm();
  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <section
      id="search-form"
      className="bg-base-100 border-base-300 my-8 border p-6 shadow-sm max-xl:mx-4">
      <form onSubmit={handleSubmit}>
        <form.AppField
          name="q"
          validators={{
            onBlur: ({ value }) =>
              !value ? "Search field cannot be empty!" : undefined,
          }}>
          {(field) => <field.SearchField />}
        </form.AppField>
      </form>
    </section>
  );
}
