import ButtonScrollTop from "@components/BtnScrollTop";
import Navbar from "@components/ui/Navbar";
import SearchFilter from "@components/ui/SearchFilter";
import WallpaperResult from "@components/ui/WallpaperResult";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-base-200 min-h-screen w-screen flex-col">
      <Navbar />

      <main className="flex-1 pb-4">
        <SearchFilter />

        <QueryClientProvider client={queryClient}>
          <WallpaperResult />
        </QueryClientProvider>
      </main>

      <ButtonScrollTop />
    </div>
  );
}

export default App;
