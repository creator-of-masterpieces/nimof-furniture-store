import style from "./productsSection.module.css";

import CatalogCard from "../../../components/CatalogCard/CatalogCard.tsx";
import type { IProduct, TCategory } from "../../../types.ts";
import useFilteredProducts from "../../../hooks/useFilteredProducts.tsx";
import { forwardRef } from "react";

interface IProductsSectionProps {
  products: IProduct[];
  selectedCategories: TCategory[];
}

const ProductsSection = forwardRef<HTMLElement, IProductsSectionProps>((props, ref) => {
  const { products, selectedCategories } = props;
  // Отфильтрованный массив товаров
  const filteredProducts = useFilteredProducts(products, selectedCategories);
  return (
    <section className={style.cardsSection} ref={ref}>
      <ul className={style.cardsList}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <li key={product.id}>
              <CatalogCard
                images={product.images}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </li>
          ))
        ) : (
          <p className={style.noResults}>Нет товаров по выбранным фильтрам</p>
        )}
      </ul>
    </section>
  );
});

export default ProductsSection;
