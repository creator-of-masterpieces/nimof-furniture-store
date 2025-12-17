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
                <CallToAction
                    title={'Создайте дом своей мечты с Nimof'}
                    description={'Мы предлагаем широкий выбор качественной мебели и сантехники для вашего дома'}
                    type={'secondary'}
                />
            </main>
            <footer>Подвал</footer>
        </div>
    )
}

export default MainPage;