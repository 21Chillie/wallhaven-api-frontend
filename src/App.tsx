import { Header } from "./components/layout/Header";
import { Main } from "./components/layout/Main";
import { ThemeProvider } from "./hooks/themeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
      </ThemeProvider>
      <Main></Main>
    </>
  );
}

export default App;
