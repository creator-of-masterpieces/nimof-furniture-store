import style from "./catalogPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import ProductsSection from "../../widgets/Sections/ProductsSection/ProductsSection.tsx";
import clsx from "clsx";
import Filters from "../../components/Filters/Filters.tsx";
import { useRef, useMemo } from "react";
import type { TCategory } from "../../types.ts";
import { categories, products } from "../../data/products.ts";
import { useSearchParams } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.tsx";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const productsSectionRef = useRef<HTMLElement>(null);

  // Вычисляем selectedCategories
  const selectedCategories = useMemo(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      return categoryFromUrl
        .split(",")
        .filter((cat) => categories.includes(cat as TCategory))
        .map((cat) => cat as TCategory);
    }
    return []; // «Все категории» по умолчанию
  }, [searchParams]);

  const handleCategoryChange = (newCategories: TCategory[]) => {
    const params = new URLSearchParams();
    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","));
    }
    setSearchParams(params);
  };

  return (
    <>
      <ScrollToTop targetRef={productsSectionRef} />
      <div className={style.pageContainer}>
        <Header />
        <main>
          <div className={clsx(style.filtersGalleryWrap, style.section)}>
            {/* Секция фильтров */}
            <aside>
              <Filters
                selectedCategories={selectedCategories}
                setSelectedCategories={handleCategoryChange}
                categories={categories}
              />
            </aside>
            {/* Секция карточек */}
            <ProductsSection products={products} selectedCategories={selectedCategories} ref={productsSectionRef} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CatalogPage;
