import style from './CategoryCard.module.css'
import {Link} from "react-router-dom";
interface ICategoryCard {
    title: string;
    image: string;
    to: string;
}

const CategoryCard = (props: ICategoryCard)=> {
    const { title, image, to } = props;
    return(
        <Link to={to}
            className={style.card}
            style={{
            backgroundImage: `url(${image})`
        }}
        >
            <h3 className={style.cardTitle}>{title}</h3>
        </Link>
    )
}

export default CategoryCard;