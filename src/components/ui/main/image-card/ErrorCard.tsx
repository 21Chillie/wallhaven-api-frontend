import { FaFaceSadTear } from "react-icons/fa6";

function ErrorCard({ error }: { error: Error | null }) {
  return (
    <>
      <section
        id="error-section"
        className="mt-24 grid place-items-center gap-3 text-center"
      >
        <span className="text-error text-4xl">
          <FaFaceSadTear></FaFaceSadTear>
        </span>

        <h2 className="text-3xl font-bold">{error?.name || "Error"}</h2>

        <p className="text-base-content/50 text-base text-pretty">
          {error?.message || "Unexpected error occurred"}.
        </p>
      </section>
    </>
  );
}

export default ErrorCard;
