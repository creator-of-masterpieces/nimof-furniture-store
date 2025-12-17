import style from './CallToAction.module.css';
import clsx from "clsx";

interface ICallToActionProps {
    title: string;
    description: string;
    type: 'primary' | 'secondary';
    className?: string;
}

const CallToAction = (props: ICallToActionProps) => {
    const { title, description, type ,className } = props;
    return (
        <section className={clsx(style.cta, type === 'primary'? style.ctaPrimary: style.ctaSecondary,  className || '') }>
            <div className={style.container}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <div className={style.buttonsContainer}>
                <button className={style.button}>Кнопка1</button>
                <button className={style.button}>Кнопка2</button>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;