import ButtonScrollTop from "@components/BtnScrollTop";
import { APIKeyModal } from "@components/ModalApiKey";
import ModalWallpaperCard from "@components/ModalWallpaperCard";
import Navbar from "@components/ui/Navbar";
import SearchFilter from "@components/ui/SearchFilter";
import WallpaperResult from "@components/ui/WallpaperResult";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-base-200 min-h-screen w-screen flex-col">
      <Navbar />

      <main className="relative flex-1 pb-4">
        <SearchFilter />

        <QueryClientProvider client={queryClient}>
          <WallpaperResult />
        </QueryClientProvider>

        <ButtonScrollTop />
      </main>

      <ModalWallpaperCard />
      <APIKeyModal />
    </div>
  );
}

export default App;
