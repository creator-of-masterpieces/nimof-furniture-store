import { useMemo } from "react";
import type { IProduct, TCategory } from "../types.ts";

const useFilteredProducts = (products: IProduct[], selectedCategories: TCategory[]): IProduct[] => {
  return useMemo(() => {
    // Если нет выбранных категорий — возвращаем все товары
    if (selectedCategories.length === 0) {
      return products;
    }
    // Фильтруем товары по категориям. Хук пересчитывается только при изменении зависимостей.
    return products.filter((product) => selectedCategories.includes(product.category));
  }, [products, selectedCategories]);
};

export default useFilteredProducts;
