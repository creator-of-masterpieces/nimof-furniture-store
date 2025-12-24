import style from "./productsSection.module.css";

import CatalogCard from "../../../components/CatalogCard/CatalogCard.tsx";
import { products } from "../../../data/products.ts";

const ProductsSection = () => {
  return (
    <section className={style.cardsSection}>
      <ul className={style.cardsList}>
        {products.map((product) => (
          <li key={product.id}>
            <CatalogCard
              image={product.image}
              alt={product.alt}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductsSection;
