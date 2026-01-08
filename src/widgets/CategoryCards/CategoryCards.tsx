import style from "./CategoryCards.module.css";
import clsx from "clsx";
import CategoryCard from "../../components/CategoryCard/CategoryCard.tsx";

interface ICategoryCardsProps {
  title: string;
  className?: string;
}

const CategoryCards = (props: ICategoryCardsProps) => {
  const { title, className } = props;
  return (
    <section className={clsx(style.categorySection, className || "")}>
      <div className={style.content}>
        <h2 className={style.categoryTitle}>{title}</h2>
        <ul className={style.categoryList}>
          <li className={style.categoryItem}>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Гостиная"}
              title={"Гостиная"}
              image={"https://picsum.photos/seed/living/600/400"}
            />
          </li>
          <li className={style.categoryItem}>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Кухня"}
              title={"Кухня"}
              image={"https://picsum.photos/seed/kitchen/600/400"}
            />
          </li>
          <li className={style.categoryItem}>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Ванная"}
              title={"Ванная комната"}
              image={"https://picsum.photos/seed/bath/600/400"}
            />
          </li>
          <li className={style.categoryItem}>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Санузел"}
              title={"Санузел"}
              image={"https://picsum.photos/seed/toilet/600/400"}
            />
          </li>
          <li className={style.categoryItem}>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Шкафы"}
              title={"Шкафы"}
              image={"https://picsum.photos/seed/wardrobe/600/400"}
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryCards;
