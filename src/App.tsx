import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeProvider } from "./hooks/themeContext.hooks";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Toaster></Toaster>

      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>

      <QueryClientProvider client={queryClient}>
        <Main></Main>
      </QueryClientProvider>
    </>
  );
}

export default App;
