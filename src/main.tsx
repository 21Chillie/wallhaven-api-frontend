import { ThemeProvider } from "@store/themeProvider.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        success: {
          style: {
            borderRadius: 0,
          },
          className: "!text-base-content !font-medium !bg-base-100 !shadow-md",
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-success-content)",
          },
        },
        error: {
          style: {
            borderRadius: 0,
          },
          className: "!text-base-content !font-medium !bg-base-100 !shadow-md",
          iconTheme: {
            primary: "var(--color-error)",
            secondary: "var(--color-error-content)",
          },
        },
      }}
    />

    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
