import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import MainPage from "./pages/MainPage/MainPage.tsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/catalog"} element={<CatalogPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contacts"} element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
