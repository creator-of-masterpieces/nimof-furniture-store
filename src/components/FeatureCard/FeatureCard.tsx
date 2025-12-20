import style from './FeatureCard.module.css';

interface IFeatureCardProps {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; color?: string }>
}

const FeatureCard = (props: IFeatureCardProps) => {
    const { title, description, icon: Icon } = props;
    return(
        <div className={style.card}>
            <span className={style.icon}><Icon size={24} color="#d4a373"/></span>
            <h3 className={style.title}>{title}</h3>
            <p className={style.description}>{description}</p>
        </div>
    )
}

export default FeatureCard;