import style from "./catalogPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import ProductsSection from "../../widgets/Sections/ProductsSection/ProductsSection.tsx";
import clsx from "clsx";
import Filters from "../../components/Filters/Filters.tsx";
import { useState } from "react";
import type { TCategory } from "../../types.ts";
import { categories, products } from "../../data/products.ts";
import { useSearchParams } from "react-router-dom";

const CatalogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Получаем категорию из query-параметра
  const categoryFromUrl = searchParams.get("category");

  // Состояние для выбранных категорий (передаётся в Filters)
  const [selectedCategories, setSelectedCategories] = useState<TCategory[]>(() => {
    if (searchParams) {
      return [categoryFromUrl as TCategory];
    }
    return [];
  });

  const handleCategoryChange = (newCategories: TCategory[]) => {
    setSelectedCategories(newCategories);
    const params = new URLSearchParams();
    if (newCategories.length > 0) {
      params.set("category", newCategories.join(","));
    }
    setSearchParams(params);
  };

  return (
    <div className={style.pageContainer}>
      <Header />
      <main>
        {/*  Секция CTA */}
        <CallToAction
          title={"Мебель, с которой начинается день"}
          description={
            "Откройте для себя элегантную и функциональную мебель, которая идеально впишется в ваш интерьер и подчеркнет ваш стиль."
          }
          type={"primary"}
        >
          <LinkButton type={"link"} appearance={"primary"} to={"/catalog"}>
            Наши работы
          </LinkButton>
          <LinkButton type={"link"} appearance={"secondary"} to={"/about"}>
            Подробнее о бренде
          </LinkButton>
        </CallToAction>

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
          <ProductsSection products={products} selectedCategories={selectedCategories} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
