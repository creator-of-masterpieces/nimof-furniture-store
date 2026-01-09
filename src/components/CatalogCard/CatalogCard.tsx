import style from "./catalogCard.module.css";
import Modal from "../Modal/Modal.tsx";
import { useState } from "react";
import ProductPreview from "../ProductPreview/ProductPreview.tsx";
import type { IImage } from "../../types.ts";

interface ICatalogCardProps {
  images: IImage[];
  title: string;
  description: string;
  price: string;
}

const CatalogCard = (props: ICatalogCardProps) => {
  const { images, title, description, price } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <figure className={style.card}>
      <img className={style.cardImage} src={images[0].src} alt={images[0].alt} onClick={handleImageClick} />
      <figcaption className={style.cardInfo}>
        <h3 className={style.cardTitle}>{title}</h3>
        <span className={style.cardPrice}>{price}</span>
        <p className={style.cardDescription}>{description}</p>
      </figcaption>
      <Modal variant={"Product"} title={"Название товара"} isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductPreview images={images} title={title} description={description} price={price} />
      </Modal>
    </figure>
  );
};

export default CatalogCard;
