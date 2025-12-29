import style from "./productPreview.module.css";
import TestSwiper from "../TestSwiper/TestSwiper.tsx";
import { Separator } from "../../shared/Separator/Separator.tsx";
import type { IImage } from "../../data/products.ts";

interface IProductPreviewProps {
  images: IImage[];
  title: string;
  description: string;
  price: string;
}

const ProductPreview = (props: IProductPreviewProps) => {
  const { images, title, description, price } = props;
  return (
    <figure className={style.productPreview}>
      <div className={style.sliderContainer}>
        <TestSwiper images={images} />
      </div>

      <figcaption className={style.productInfo}>
        <div>
          <h3 className={style.productTitle}>{title}</h3>
          <Separator className={style.separator} />
        </div>

        <div>
          <p className={style.productDescription}>{description}</p>
          <Separator className={style.separator} />
        </div>

        <div>
          <div className={style.productInner}>
            <h4>Материал</h4>
            <span>Дерево</span>
          </div>
          <Separator className={style.separator} />
        </div>

        <div>
          <div className={style.productInner}>
            <h4>Цена</h4>
            <span>{price}</span>
          </div>
          <Separator className={style.separator} />
        </div>

        <button className={style.contactButton} type={"button"}>
          Получить консультацию
        </button>
      </figcaption>
    </figure>
  );
};
export default ProductPreview;
