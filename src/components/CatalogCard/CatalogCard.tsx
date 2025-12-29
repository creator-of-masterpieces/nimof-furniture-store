import style from "./catalogCard.module.css";
import Modal from "../Modal/Modal.tsx";
import { useState } from "react";
import ProductPreview from "../ProductPreview/ProductPreview.tsx";

interface ICatalogCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

const CatalogCard = (props: ICatalogCardProps) => {
  const { image, alt, title, description, price } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleContact = () => {
    alert("Открылась окно с формой обратной связи!");
  };

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <figure className={style.card}>
      <img className={style.cardImage} src={image} alt={alt} onClick={handleImageClick} />

      <figcaption className={style.cardInfo}>
        <h3 className={style.cardTitle}>{title}</h3>
        <span className={style.cardPrice}>{price}</span>
        <p className={style.cardDescription}>{description}</p>
        <button className={style.cardButton} onClick={handleContact}>
          Получить консультацию
        </button>
      </figcaption>
      <Modal title={"Название товара"} isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductPreview />
      </Modal>
    </figure>
  );
};
export default CatalogCard;
