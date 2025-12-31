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
          <li>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Гостиная"}
              title={"Гостиная"}
              image={"/src/assets/images/lv1.jpg"}
            />
          </li>
          <li>
            <CategoryCard to={"/catalog"} categoryKey={"Кухня"} title={"Кухня"} image={"/src/assets/images/kc1.jpg"} />
          </li>
          <li>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Ванная"}
              title={"Ванная комната"}
              image={"/src/assets/images/br1.jpg"}
            />
          </li>
          <li>
            <CategoryCard
              to={"/catalog"}
              categoryKey={"Санузел"}
              title={"Санузел"}
              image={"/src/assets/images/tl1.jpg"}
            />
          </li>
          <li>
            <CategoryCard to={"/catalog"} categoryKey={"Шкафы"} title={"Шкафы"} image={"/src/assets/images/wr1.jpg"} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryCards;
