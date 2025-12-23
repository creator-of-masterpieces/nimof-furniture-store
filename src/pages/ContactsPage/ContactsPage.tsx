import style from "./contactsPage.module.css";
import Header from "../../widgets/Header/Header.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import { Map } from "../../components/Map/Map.tsx";
import { Footer } from "../../widgets/Footer/Footer.tsx";
import FeatureCard from "../../components/FeatureCard/FeatureCard.tsx";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import clsx from "clsx";
import ContactsForm from "../../components/ContactsForm/ContactsForm.tsx";

const ContactsPage = () => {
  return (
    <div className={style.pageContainer}>
      <Header />
      <main>
        {/*Секция Call To Action */}
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

        {/*Секция Contacts */}
        <section className={clsx(style.section, style.contactsSection)}>
          {/*Блок company contacts*/}
          <div className={style.companyContactsSection}>
            <ul className={style.companyContactsList}>
              <li className={style.companyContactsItem}>
                <FeatureCard icon={FaMapMarkerAlt} title={"Адрес"}>
                  <address>МКАД, 25-й километр, 4с1 Москва, Россия</address>
                </FeatureCard>
              </li>
              <li className={style.companyContactsItem}>
                <FeatureCard icon={FaPhone} title={"Телефон"}>
                  <a href="tel:+79688886668">+7 (968) 888-66-68</a>
                </FeatureCard>
              </li>
              <li className={style.companyContactsItem}>
                <FeatureCard icon={FaEnvelope} title={"Email"}>
                  <a href="mailto:info@nimof.ru">info@nimof.ru</a>
                  <a href="mailto:sales@nimof.ru">sales@nimof.ru</a>
                </FeatureCard>
              </li>
              <li className={style.companyContactsItem}>
                <FeatureCard icon={FaClock} title={"Режим работы"}>
                  <p>Пн-Пт: 10:00 - 20:00</p>
                  <p>Сб-Вс: 11:00 - 18:00</p>
                </FeatureCard>
              </li>
            </ul>
          </div>

          {/*Блок contacts form*/}
          <div className={style.contactsFormSection}>
            <h2 className={style.formSectionTitle}>Напишите нам</h2>
            <ContactsForm />
          </div>
        </section>
        <Map />
      </main>
      <Footer />
    </div>
  );
};

export default ContactsPage;
