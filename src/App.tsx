import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeProvider } from "./hooks/themeContext.hooks";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./hooks/searchContext.hooks";

const ModalWallpaperCard = lazy(() =>
  import("./components/ui/aside/ModalWallpaperCard").then((module) => ({
    default: module.ModalWallpaperCard,
  })),
);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Toaster></Toaster>

      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>

      <QueryClientProvider client={queryClient}>
        <SearchProvider>
          <Main></Main>
          <Suspense fallback={null}>
            <ModalWallpaperCard></ModalWallpaperCard>
          </Suspense>
        </SearchProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
