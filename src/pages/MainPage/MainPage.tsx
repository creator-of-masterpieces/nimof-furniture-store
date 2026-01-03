import style from "./mainPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CategoryCards from "../../widgets/CategoryCards/CategoryCards.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import FeaturesSection from "../../widgets/Sections/FeaturesSection/FeaturesSection.tsx";
import { Map } from "../../components/Map/Map.tsx";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop.tsx";
import { useState } from "react";
import Modal from "../../components/Modal/Modal.tsx";
import ContactsForm from "../../components/ContactsForm/ContactsForm.tsx";
import { useMediaQuery } from "react-responsive";

const MainPage = () => {
  const [isContactsModalOpen, setIsContactsModalOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleModalClose = () => {
    setIsContactsModalOpen(false);
  };

  const handleContactsButton = () => {
    setIsContactsModalOpen(true);
  };

  return (
    <div className={style.pageContainer}>
      <ScrollToTop />
      <Header isMobile={isMobile} />
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

        <CategoryCards title={"Наши работы"} />
        <FeaturesSection></FeaturesSection>

        <CallToAction
          title={"Создайте дом своей мечты с Nimof"}
          description={"Мы предлагаем широкий выбор качественной мебели и сантехники для вашего дома"}
          type={"secondary"}
        >
          <LinkButton type={"link"} appearance={"primary"} to={"/catalog"}>
            Наши работы
          </LinkButton>
          <LinkButton appearance={"secondary"} type={"button"} onClick={handleContactsButton}>
            Получить консультацию
          </LinkButton>
        </CallToAction>
        <Map />
      </main>
      <Footer />
      <Modal
        variant={"Form"}
        isOpen={isContactsModalOpen}
        title={"Мы ответим на все ваши вопросы"}
        onClose={handleModalClose}
      >
        <ContactsForm />
      </Modal>
    </div>
  );
};

export default MainPage;
