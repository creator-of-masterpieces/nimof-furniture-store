import style from './mainPage.module.css'
import Header from "../../widgets/Header/Header.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";

const MainPage = () => {
    return (
        <div className={style.pageContainer}>
            <Header/>
            <main>
                <CallToAction
                    title={'Мебель, с которой начинается день'}
                    description={'Откройте для себя элегантную и функциональную мебель, которая идеально впишется в ваш интерьер и подчеркнет ваш стиль.'}
                    type={'primary'}/>
            </main>
            <footer>Подвал</footer>
        </div>
    )
}

export default MainPage;