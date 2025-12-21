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
            <CategoryCard to={"/catalog"} title={"Гостиная"} image={"/src/assets/images/kitchen.webp"} />
          </li>
          <li>
            <CategoryCard to={"/catalog"} title={"Кухня"} image={"/src/assets/images/kitchen.webp"} />
          </li>
          <li>
            <CategoryCard to={"/catalog"} title={"Ванная комната"} image={"/src/assets/images/kitchen.webp"} />
          </li>
          <li>
            <CategoryCard to={"/catalog"} title={"Санузел"} image={"/src/assets/images/kitchen.webp"} />
          </li>
          <li>
            <CategoryCard to={"/catalog"} title={"Шкафы"} image={"/src/assets/images/kitchen.webp"} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoryCards;
