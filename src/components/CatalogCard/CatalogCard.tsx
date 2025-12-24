import style from "./catalogCard.module.css";
import { Link } from "react-router-dom";

interface ICatalogCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

const CatalogCard = (props: ICatalogCardProps) => {
  const { image, alt, title, description, price } = props;
  const handleContact = () => {
    alert("Открылась окно с формой обратной связи!");
  };
  return (
    <figure className={style.card}>
      <Link to={"/catalog"}>
        <img className={style.cardImage} src={image} alt={alt} />
      </Link>
      <figcaption className={style.cardInfo}>
        <h3 className={style.cardTitle}>{title}</h3>
        <span className={style.cardPrice}>{price}</span>
        <p className={style.cardDescription}>{description}</p>
        <button className={style.cardButton} onClick={handleContact}>
          Получить консультацию
        </button>
      </figcaption>
    </figure>
  );
};
export default CatalogCard;
