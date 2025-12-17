import style from './CallToAction.module.css';
import clsx from "clsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";

interface ICallToActionProps {
    title: string;
    description: string;
    type: 'primary' | 'secondary';
    className?: string;
}

const CallToAction = (props: ICallToActionProps) => {
    const {title, description, type, className} = props;
    return (
        <section
            className={clsx(style.cta, type === 'primary' ? style.ctaPrimary : style.ctaSecondary, className || '')}>
            <div className={style.container}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.description}>{description}</p>
                <div className={style.buttonsContainer}>
                    <LinkButton className={clsx(style.button, style.buttonPrimary)} type={'link'} to={'/catalog'}>Наши работы</LinkButton>
                    <LinkButton className={clsx(style.button, style.buttonSecondary)} type={'link'} to={'/about'}>Подробнее о бренде</LinkButton>
                </div>
            </div>
        </section>
    )
}

export default CallToAction;