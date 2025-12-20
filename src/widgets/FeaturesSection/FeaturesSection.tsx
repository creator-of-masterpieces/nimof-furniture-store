import style from './FeaturesSection.module.css';

const FeaturesSection = () => {
    return(
        <section className={style.features}>
            <h2 className={style.featuresTitle}>Наши ценности</h2>
            <ul className={style.featuresList}>
                <li className={style.featuresItem}>Карточка</li>
                <li className={style.featuresItem}>Карточка</li>
                <li className={style.featuresItem}>Карточка</li>
                <li className={style.featuresItem}>Карточка</li>
            </ul>
        </section>
    )
}
export default FeaturesSection;