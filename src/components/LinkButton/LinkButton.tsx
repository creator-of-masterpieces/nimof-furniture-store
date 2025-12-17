import {Link} from "react-router-dom";

interface  IButtonProps {
    type: 'link' | 'button';
    children: React.ReactNode;
    onClick?: () => void;
    to?: string;
    className?: string;
}

const LinkButton = (props: IButtonProps)=> {
    const { type, to , children, onClick, className } = props;
    if (type === 'link') {
        return(
            <Link className={className} to={to ?? '/'}>{children}</Link>
        )
    }
        else {
            return (
                <button className={className} type={'button'} onClick={onClick}>{children}</button>
            )
        }
    }

export default LinkButton;