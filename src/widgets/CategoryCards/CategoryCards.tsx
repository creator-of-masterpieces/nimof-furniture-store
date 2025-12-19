import style from './CategoryCards.module.css';
import clsx from "clsx";

interface ICategoryCardsProps {
    title: string;
    className?: string;
}

const CategoryCards = (props: ICategoryCardsProps) => {
    const {title, className} = props;
    return (
        <section className={clsx(style.categorySection, className || '')}>
            <div className={style.content}>
                <h2 className={style.categoryTitle}>{title}</h2>
                <ul className={style.categoryList}>
                    <li>Гостиная</li>
                    <li>Кухня</li>
                    <li>Ванная комната</li>
                    <li>Санузел</li>
                    <li>Шкафы</li>
                </ul>
            </div>
        </section>
    )
}

export default CategoryCards;