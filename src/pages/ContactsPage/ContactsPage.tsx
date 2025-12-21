import style from "./contactsPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Map } from "../../components/Map/Map.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";

const ContactsPage = () => {
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
        <section>
          <div>Контакты</div>
          <div>Напишите нам</div>
        </section>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
