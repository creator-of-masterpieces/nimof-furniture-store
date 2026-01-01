import { useLocation, useNavigationType } from "react-router-dom";
import { useEffect, useRef } from "react";

// Компонент скроллит страницу вверх при смене роута
const ScrollToTop = ({ targetRef }: { targetRef: React.RefObject<HTMLElement | null> }) => {
  const { pathname, search } = useLocation();
  const navigationType = useNavigationType(); // 'POP' | 'PUSH' | 'REPLACE'

  // Референсы для отслеживания предыдущих значений
  const prevPathnameRef = useRef<string | null>(null);
  const prevSearchRef = useRef<string | null>(null);
  const isFirstRenderRef = useRef(true);

  useEffect(() => {
    const hasCategoryParam = search.includes("category=");

    // Сохраняем предыдущие значения
    const prevPathname = prevPathnameRef.current;
    const prevSearch = prevSearchRef.current;

    // Обновляем референсы
    prevPathnameRef.current = pathname;
    prevSearchRef.current = search;

    // 1. Скролл к секции товаров при наличии category= в URL
    if (hasCategoryParam && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    // 2. Скролл наверх только при реальном переходе на страницу
    // (не при обновлении параметров на той же странице)
    if (
      ["/", "/catalog", "/about", "/contacts"].includes(pathname) &&
      (isFirstRenderRef.current || // Первый рендер
        prevPathname !== pathname || // Смена маршрута
        (prevPathname === pathname && prevSearch !== search && !prevSearch?.includes("category=") && !hasCategoryParam))
      // Обновление параметров без category= на той же странице
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      isFirstRenderRef.current = false;
      return;
    }

    // 3. Нет скролла при снятии фильтров ("Все категории")
    // Если URL изменился с /catalog?category=... на /catalog
    // и это не первый рендер — ничего не делаем
  }, [pathname, search, navigationType, targetRef]);

  return null;
};

export default ScrollToTop;
