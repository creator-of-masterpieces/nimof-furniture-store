import style from './Header.module.css';
import ContactLink from "../../components/ContactLink/ContactLink.tsx";
import Logo from "../../components/Logo/Logo.tsx";
import NavigationList from "../../components/NavigationList/NavigationList.tsx";

const Header = () => {
    return (
        <header className={style.header}>

            <div className={style.top}>
                <ul className={style.contactsList}>
                    <li className={style.contactsListItem}><ContactLink href={'tel:+79688886668'} text={'+7 (968) 888-66-68'} icon={'📞'}/></li>
                    <li className={style.contactsListItem}><ContactLink href={'mailto:info@nimof.ru'} text={'info@nimof.ru'} icon={'✉'}/></li>
                </ul>
            </div>

            <div className={style.main}>
                <nav className={style.navigation}>
                    <Logo/><NavigationList type={'isHeaderNav'}/>
                </nav>
            </div>
        </header>
    )
}

export default Header;