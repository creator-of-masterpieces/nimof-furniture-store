import style from "./CallToAction.module.css";
import clsx from "clsx";

interface ICallToActionProps {
  title: string;
  description: string;
  type: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const CallToAction = (props: ICallToActionProps) => {
  const { title, description, type, className, children } = props;
  return (
    <section className={clsx(style.cta, type === "primary" ? style.ctaPrimary : style.ctaSecondary, className || "")}>
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.buttonsContainer}>{children}</div>
      </div>
    </section>
  );
};

export default CallToAction;
