import styles from "./footer.module.css";
import { Separator } from "../../shared/Separator/Separator.tsx";
import { Copyright } from "../../shared/Copyright/Copyright.tsx";
import { Card } from "../../shared/Card/Card.tsx";
import ContactLink from "../../components/ContactLink/ContactLink.tsx";
import NavigationList from "../../components/NavigationList/NavigationList.tsx";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.cardsContainer}>
          <li>
            <Card className={styles.card}>
              <h3 className={styles.cardTitle}>время работы</h3>
              <div>
                <p>Понедельник - Пятница:</p>
                <p className={styles.subTitleTime}>С 9:00 до 21:00</p>
              </div>
              <div>
                <p>Суббота - Воскресенье:</p>
                <p className={styles.subTitleTime}>С 9:00 до 18:00</p>
              </div>
            </Card>
          </li>
          <li>
            <Card className={styles.card}>
              <h3 className={styles.cardTitle}>наш адрес</h3>
              <p className="">Москва, МКАД, 25-й километр, 4с1, 1 этаж</p>
              <p className="">Мы находимся в ТЦ "Мебельный Город", 2 этаж, секция 25A, рядом со входом</p>
            </Card>
          </li>
          <li>
            <Card className={styles.card}>
              <h3 className={styles.cardTitle}>контакты</h3>
              <ContactLink href={"tel:+79688886668"} text={"+7 (968) 888-66-68"} type={"phone"} icon={FaPhone} />
              <ContactLink href={"mailto:info@nimof.ru"} text={"info@nimof.ru"} type={"email"} icon={FaEnvelope} />
            </Card>
          </li>
          <li>
            <Card className={styles.card}>
              <h3 className={styles.cardTitle}>навигация</h3>
              <nav>
                <NavigationList type={"isFooterNav"} className={styles.navFooter} />
              </nav>
            </Card>
          </li>
        </ul>
        <Separator className={styles.separator} />
      </div>

      <div className={styles.dataContainer}>
        <Copyright className={styles.footerDate} />
      </div>
    </footer>
  );
};
