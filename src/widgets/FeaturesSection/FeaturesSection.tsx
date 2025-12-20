import style from './FeaturesSection.module.css';
import FeatureCard from "../../components/FeatureCard/FeatureCard.tsx";
import { FaCheckCircle, FaPalette, FaCog, FaHeart } from 'react-icons/fa';

const FeaturesSection = () => {
    return(
        <section className={style.features}>
            <h2 className={style.featuresTitle}>Наши ценности</h2>
            <ul className={style.featuresList}>
                <li className={style.featuresItem}>
                    <FeatureCard icon={FaCheckCircle} title={'Качество'} description={'Используем только высококачественные материалы и современное оборудование для производства нашей продукции'}/>
                </li>
                <li className={style.featuresItem}>
                    <FeatureCard icon={FaPalette} title={'Дизайн'} description={'Наши дизайнеры создают эргономичную и функциональную мебель, которая станет украшением любого интерьера'}/>
                </li>
                <li className={style.featuresItem}>
                    <FeatureCard icon={FaCog} title={'Технологии'} description={'Внедряем инновационные технологии для создания долговечной и удобной мебели'}/>
                </li>
                <li className={style.featuresItem}>
                    <FeatureCard icon={FaHeart} title={'Забота'} description={'Заботимся о каждом клиенте и стремимся предоставить лучший сервис и решения под любые потребности'}/>
                </li>
            </ul>
        </section>
    )
}
export default FeaturesSection;