import style from './logo.module.scss';
import {Link, useLocation} from "react-router-dom";

const Logo = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const cursorStyle = isHomePage ? 'default' : 'pointer';

    return (
        <Link className={style.logo} style={{cursor: cursorStyle}} to={isHomePage ? '' : '/'}>Nimof</Link>
    )
}
export default Logo;