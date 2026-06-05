export default function WallpaperResult() {
  const params = new URLSearchParams(window.location.search);
  const values = Object.fromEntries(params.entries());
  console.log(values);

  return <div></div>;
}
