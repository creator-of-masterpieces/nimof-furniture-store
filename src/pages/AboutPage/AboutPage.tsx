import style from "./aboutPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import SectionTitle from "../../components/SectionTitle/SectionTitle.tsx";
import clsx from "clsx";
import FeatureCard from "../../components/FeatureCard/FeatureCard.tsx";
import { FaHeadset, FaPenNib, FaWrench, FaTruck } from "react-icons/fa";

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
            <SectionTitle tag={"h2"} title={"Наша история"} />
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

        <section className={clsx(style.section, style.workProcessSection)}>
          <SectionTitle tag={"h2"} title={"Как мы работаем"} />
          <ul className={style.cardList}>
            <li className={style.cardItem}>
              <FeatureCard icon={FaHeadset} title={"Консультация"}>
                <p>
                  Профессиональная консультация и подбор мебели в соответствии с вашими потребностями и предпочтениями
                </p>
              </FeatureCard>
            </li>
            <li className={style.cardItem}>
              <FeatureCard icon={FaPenNib} title={"Проектирование"}>
                <p>Разработка детального дизайн-проекта с учетом особенностей вашего пространства</p>
              </FeatureCard>
            </li>
            <li className={style.cardItem}>
              <FeatureCard icon={FaWrench} title={"Производство"}>
                <p>Изготовление мебели на собственном производстве с использованием качественных материалов</p>
              </FeatureCard>
            </li>
            <li className={style.cardItem}>
              <FeatureCard icon={FaTruck} title={"Консультация"}>
                <p>Быстрая доставка и профессиональная сборка мебели на месте</p>
              </FeatureCard>
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
