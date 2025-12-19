import styles from "./footer.module.css"
import {Separator} from "../../shared/Separator/Separator.tsx";
import {Copyright} from "../../shared/Copyright/Copyright.tsx";

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <ul className={styles.cardsContainer}>
                    <li className={styles.card}>
                        <h3 className={styles.cardTitle}>время работы</h3>
                        <div>
                            <p>Понедельник - Пятница:</p>
                            <p className={styles.subTitleTime}>С 9:00 до 21:00</p>
                        </div>
                        <div>
                            <p>Суббота - Воскресенье:</p>
                            <p  className={styles.subTitleTime}>С 9:00 до 18:00</p>
                        </div>

                    </li>
                    <li className={styles.card}>
                        <h3 className={styles.cardTitle}>наш адрес</h3>
                        <p className="">Москва, МКАД, 25-й километр, 4с1, 1 этаж</p>
                        <p className="">
                            Мы находимся в ТЦ "Мебельный Город",
                            2 этаж, секция 25A, рядом со
                            входом
                        </p>
                    </li>
                    <li className={styles.card}>
                        <h3 className={styles.cardTitle}>контакты</h3>
                        <a href={"tel:+79688886668"}>
                            +7 (968) 888-66-68
                        </a>
                        <a href={"mailto:info@nimof.ru"}>
                            info@nimof.ru
                        </a>
                    </li>
                    <li className={styles.card}>
                        <h3 className={styles.cardTitle}>навигация</h3>
                        <nav>
                            <ul className={styles.navFooter}>
                                <li><a href="/">Главная</a></li>
                                <li><a href="/">Наши работы</a></li>
                                <li><a href="/">О компании</a></li>
                                <li><a href="/">Контакты</a></li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </div>
            <Separator className={styles.separator}/>
            <div className={styles.dataContainer}>
               <Copyright className={styles.footerDate} />
            </div>
        </footer>
    )
}