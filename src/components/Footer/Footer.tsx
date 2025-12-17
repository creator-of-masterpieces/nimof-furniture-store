import styles from "./footer.module.css"
import {Separator} from "../Separator/Separator.tsx";

export const Footer = () => {

    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
            <ul className={styles.cardsContainer}>
                <li className={styles.card}>
                    <h3 className={styles.cardTitle}>время работы</h3>
                    <div className={styles.test}>
                        <p className="">Понедельник - Пятница:</p>
                        <p className="">С 9:00 до 21:00</p>
                    </div>
                    <div className={styles.test}>
                        <p className="">Суббота - Воскресенье:</p>
                        <p className="">С 9:00 до 18:00</p>
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
                            <li><a to="/">Главная</a></li>
                            <li><a to="/">Наши работы</a></li>
                            <li><a to="/">О компании</a></li>
                            <li><a to="/">Контакты</a></li>
                        </ul>
                    </nav>
                </li>
            </ul>
            </div>
            <Separator className={styles.separator}/>
            <div className={styles.dataContainer}>
                <span className={styles.footerDate}>© {currentYear} Nimof. Все права защищены.</span>
            </div>

        </footer>
    )
}