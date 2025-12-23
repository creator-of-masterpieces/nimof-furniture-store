import style from "./FeatureCard.module.css";

interface IFeatureCardProps {
  title: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  children: React.ReactNode;
}

const FeatureCard = (props: IFeatureCardProps) => {
  const { title, icon: Icon, children } = props;
  return (
    <div className={style.card}>
      <span className={style.icon}>
        <Icon size={24} color="#d4a373" />
      </span>
      <h3 className={style.title}>{title}</h3>
      {children}
    </div>
  );
};

export default FeatureCard;
