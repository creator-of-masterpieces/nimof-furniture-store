import style from "./productPreview.module.css";
import TestSwiper from "../TestSwiper/TestSwiper.tsx";
import { Separator } from "../../shared/Separator/Separator.tsx";

const ProductPreview = () => {
  return (
    <figure className={style.productPreview}>
      <div className={style.sliderContainer}>
        <TestSwiper />
      </div>

      <figcaption className={style.productInfo}>
        <div>
          <h3 className={style.productTitle}>Название товара</h3>
          <Separator className={style.separator} />
        </div>

        <div>
          <p className={style.productDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse
            expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde
            veniam! Illo, minus.
          </p>
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
            <span>30 000 руб.</span>
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
