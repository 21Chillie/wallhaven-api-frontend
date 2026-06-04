import Navbar from "@components/ui/Navbar";
import SearchFilter from "@components/ui/SearchFilter";
import WallpaperResult from "@components/ui/WallpaperResult";

function App() {
  return (
    <div className="bg-base-200 min-h-screen w-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <SearchFilter />
        <WallpaperResult />
      </main>
    </div>
  );
}

export default App;
