import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/style.css";
import MainPage from "./pages/MainPage/MainPage.tsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.tsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    if (isMobile) {
      const body = document.querySelector("#body");
      body?.classList.add("mobile");
    }
  }, [isMobile]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/catalog"} element={<CatalogPage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/contacts"} element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
