import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Элемент с id=root не найден в DOM");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
