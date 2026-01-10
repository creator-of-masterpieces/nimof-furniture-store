import style from "./contactLink.module.css";

interface IContactLinkProps {
  href: string;
  text: string;
  type: "phone" | "email";
  icon: React.ComponentType<{ size?: number; color?: string; style?: React.CSSProperties }>;
  className?: string;
}

const ContactLink = (props: IContactLinkProps) => {
  const { href, text, type, icon: Icon, className } = props;
  return (
    <a className={`${style.contactLink} ${className || ""}`} href={href} target="_blank" rel="noopener noreferrer">
      <span className={style.icon}>
        {type === "phone" ? (
          <Icon color="var(--color-accent)" style={{ transform: "rotate(100deg)" }} />
        ) : (
          <Icon color="var(--color-accent)" />
        )}
      </span>
      <span className={style.text}>{text}</span>
    </a>
  );
};

export default ContactLink;
