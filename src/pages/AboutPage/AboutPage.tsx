import style from "./aboutPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx";
import clsx from "clsx";

const AboutPage = () => {
  return (
    <div className={style.pageContainer}>
      <Header />

      <main>
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

        <section className={clsx(style.historySection, style.section)}>
          <div className={style.historyDescription}>
            <SectionTitle title={"Наша история"} />
            <p className={style.historyText}>
              Компания Nimof была основана в 2010 году группой энтузиастов, объединенных любовью к качественной мебели и
              эргономичным решениям для жилых и рабочих пространств. За эти годы мы выросли из небольшой мастерской в
              ведущего производителя мебели в Москве и Московской области.
            </p>
            <p className={style.historyText}>
              Мы гордимся тем, что наша мебель находится в тысячах домов и офисов, делая жизнь людей комфортнее и
              удобнее. Наша цель — не просто продавать мебель, а создавать уникальные решения, которые идеально
              вписываются в пространство и отвечают всем потребностям наших клиентов.
            </p>
          </div>

          <div className={style.historyMedia}>
            <img
              src="/src/assets/images/living-room.jpg"
              alt="Фото хорошо освещенной гостинной в зеленых тонах с бежевым диваном в центре"
            />
          </div>
        </section>

        <section>
          <SectionTitle title={"Как мы работаем"} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
