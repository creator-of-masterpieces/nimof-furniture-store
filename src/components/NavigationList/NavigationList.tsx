import style from "./navigationList.module.css";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const NAV_ITEMS = [
  { path: "/", label: "Главная" },
  { path: "/catalog", label: "Наши работы" },
  { path: "/about", label: "О компании" },
  { path: "/contacts", label: "Контакты" },
] as const;

type TNavigationList = "isHeaderNav" | "isFooterNav" | "isBurgerNav";

interface INavigationListProps {
  type: TNavigationList;
  className?: string;
}

const NavigationList = (props: INavigationListProps) => {
  const location = useLocation();
  const { type, className } = props;

  const getLinkClass = (path: string): string =>
    clsx(
      style.navLink,
      type === "isHeaderNav" && style.headerNavLink,
      location.pathname === path && style.navLinkCurrent,
    );

  return (
    <ul
      className={clsx(
        style.navList,
        type === "isHeaderNav" && style.headerNav,
        type === "isFooterNav" && style.footerNav,
        type === "isBurgerNav" && style.burgerNav,
        className,
      )}
    >
      {NAV_ITEMS.map((item) => (
        <li key={item.path}>
          <Link to={item.path} className={getLinkClass(item.path)}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationList;
