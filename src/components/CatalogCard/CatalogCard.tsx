import style from "./catalogCard.module.css";
import { Link } from "react-router-dom";

const CatalogCard = () => {
  const handleContact = () => {
    alert("Открылась окно с формой обратной связи!");
  };
  return (
    <figure className={style.card}>
      <Link to={"/catalog"}>
        <img className={style.cardImage} src="/src/assets/images/living-room.jpg" alt="Фото гостинной" />
      </Link>
      <figcaption className={style.cardInfo}>
        <h3 className={style.cardTitle}>Гостиная Welcome</h3>
        <span className={style.cardPrice}>39 990₽</span>
        <p className={style.cardDescription}>Описание гостиной</p>
        <button className={style.cardButton} onClick={handleContact}>
          Получить консультацию
        </button>
      </figcaption>
    </figure>
  );
};
export default CatalogCard;
