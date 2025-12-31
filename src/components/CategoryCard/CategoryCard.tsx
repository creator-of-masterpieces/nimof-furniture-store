import style from "./CategoryCard.module.css";
import { Link } from "react-router-dom";
interface ICategoryCard {
  title: string;
  image: string;
  to: string;
  categoryKey: string;
}

const CategoryCard = (props: ICategoryCard) => {
  const { title, image, to, categoryKey } = props;

  // encodeURIComponent — защищает от спецсимволов в названии категории.
  const toWithFilter = `${to}?category=${encodeURIComponent(categoryKey)}`;
  return (
    <Link
      to={toWithFilter}
      className={style.card}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3 className={style.cardTitle}>{title}</h3>
    </Link>
  );
};

export default CategoryCard;
