import { useSearchParamsStore } from "~/store/useSearchParamsStore";

export default function WallpaperResult() {
  const params = useSearchParamsStore((s) => s.params);
  console.log(params);

  return <div></div>;
}
