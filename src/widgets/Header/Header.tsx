import style from "./header.module.css";
import ContactLink from "../../components/ContactLink/ContactLink.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import NavigationList from "../../components/NavigationList/NavigationList.tsx";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import BurgerMenu from "../../components/BurgerMenu/BurgerMenu.tsx";

interface IHeaderProps {
  isMobile: boolean;
}

const Header = (props: IHeaderProps) => {
  const { isMobile } = props;

  return (
    <header className={style.header}>
      <div className={style.top}>
        <ul className={style.contactsList}>
          <li className={style.contactsListItem}>
            <ContactLink href={"tel:+79688886668"} text={"+7 (968) 888-66-68"} type={"phone"} icon={FaPhone} />
          </li>
          <li className={style.contactsListItem}>
            <ContactLink href={"mailto:info@nimof.ru"} text={"info@nimof.ru"} type={"email"} icon={FaEnvelope} />
          </li>
        </ul>
      </div>

      <div className={style.main}>
        <Logo />
        {!isMobile && (
          <nav className={style.navigation}>
            <NavigationList type={"isHeaderNav"} />
          </nav>
        )}
        {isMobile && (
          <div className={style.burger}>
            <BurgerMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
