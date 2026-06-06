import { useFormContext } from "@hooks/useFormContext";

export default function ButtonSubmit({
  actionName,
  btnSmall = false,
}: {
  actionName: string;
  btnSmall: boolean;
}) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.isSubmitting, state.canSubmit]}>
      {([isSubmitting, canSubmit]) => (
        <button
          className={`btn ${btnSmall ? "btn-sm" : ""} btn-soft btn-accent`}
          type="submit"
          disabled={isSubmitting || !canSubmit}>
          {isSubmitting ? "Applying..." : actionName}
        </button>
      )}
    </form.Subscribe>
  );
}
