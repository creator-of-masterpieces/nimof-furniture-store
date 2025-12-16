import style from './mainPage.module.css'
import Header from "../../widgets/Header/Header.tsx";

const MainPage = () => {
    return (
        <div className={style.pageContainer}>
            <Header/>
            <main>Контент</main>
            <footer>Подвал</footer>
        </div>
    )
}

export default MainPage;