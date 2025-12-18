import style from './LinkButton.module.css';
import {Link} from "react-router-dom";
import clsx from "clsx";

interface  IButtonProps {
    type: 'link' | 'button';
    children: React.ReactNode;
    onClick?: () => void;
    appearance: 'primary' | 'secondary';
    to?: string;
    className?: string;
}

const LinkButton = (props: IButtonProps)=> {
    const { type, to , children, onClick, className, appearance} = props;
    if (type === 'link') {
        return(
            <Link className={clsx(style.button, appearance === 'primary' && style.buttonPrimary, appearance === 'secondary' && style.buttonSecondary, className)} to={to ?? '/'}>{children}</Link>
        )
    }
        else {
            return (
                <button className={clsx(style.button, appearance === 'primary' && style.buttonPrimary, appearance === 'secondary' && style.buttonSecondary, className)} type={'button'} onClick={onClick}>{children}</button>
            )
        }
    }

export default LinkButton;