import { useLocation } from "react-router-dom";
import { useEffect } from "react";

// Компонент скроллит страницу вверх при смене роута

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null;
};

export default ScrollToTop;
