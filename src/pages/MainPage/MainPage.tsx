import style from './mainPage.module.css'
import Header from "../../widgets/Header/Header.tsx";
import CallToAction from "../../widgets/CallToAction/CallToAction.tsx";
import LinkButton from "../../components/LinkButton/LinkButton.tsx";
import CategoryCards from "../../widgets/CategoryCards/CategoryCards.tsx";

const MainPage = () => {
    return (
        <div className={style.pageContainer}>
            <Header/>
            <main>
                <CallToAction
                    title={'Мебель, с которой начинается день'}
                    description={'Откройте для себя элегантную и функциональную мебель, которая идеально впишется в ваш интерьер и подчеркнет ваш стиль.'}
                    type={'primary'}>
                    <LinkButton
                        type={'link'}
                        appearance={'primary'}
                        to={'/catalog'}>Наши работы</LinkButton>
                    <LinkButton
                        type={'link'}
                        appearance={'secondary'}
                        to={'/about'}>Подробнее о бренде</LinkButton>
                </CallToAction>

                <CategoryCards title={'Наши работы'}/>

                <CallToAction
                    title={'Создайте дом своей мечты с Nimof'}
                    description={'Мы предлагаем широкий выбор качественной мебели и сантехники для вашего дома'}
                    type={'secondary'}
                >
                    <LinkButton
                        type={'link'}
                        appearance={'primary'}
                        to={'/catalog'}>Наши работы</LinkButton>
                    <LinkButton
                        appearance={'secondary'}
                        type={'button'}
                        onClick={() => alert('Вот тебе консультация!')}>Получить консультацию</LinkButton>
                </CallToAction>
            </main>
            <footer>Подвал</footer>
        </div>
    )
}

export default MainPage;