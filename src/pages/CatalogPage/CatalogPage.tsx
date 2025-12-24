import style from "./catalogPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import CatalogCard from "../../components/CatalogCard/CatalogCard.tsx";

const CatalogPage = () => {
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

        {/* Секция фильтров */}
        <aside>Фильтры</aside>

        {/* Секция карточек */}
        <section>
          <h2>Карточки товаров</h2>
          <CatalogCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
