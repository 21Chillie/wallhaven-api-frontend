import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeProvider } from "./hooks/themeContext.hooks";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./hooks/searchContext.hooks";
import { ModalWallpaperCard } from "./components/ui/aside/ModalWallpaperCard";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Toaster></Toaster>

      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>

      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <Main></Main>
          <ModalWallpaperCard></ModalWallpaperCard>
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
