import style from './contactLink.module.css';

interface IContactLinkProps {
    href: string;
    text: string;
    icon: string;
    className?: string;
}

const ContactLink = (props: IContactLinkProps) => {
    const {href, text, icon, className} = props;
    return (
        <a className={`${style.contactLink} ${className || ''}`} href={href}  target='_blank' rel='noopener noreferrer'>
            <span className={style.icon}>{icon}</span>
            <span className={style.text}>{text}</span>
        </a>
    )
}

export default ContactLink;