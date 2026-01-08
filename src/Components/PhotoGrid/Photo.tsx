import style from "./Photo.module.css";
import "../../Styles/global.css";

type PhotoItem = {
    img: string;
    title: string;
    alt?: string;
    navagacao: string;
};

type Props = {
    Item: PhotoItem;
};

const Cards = ({ Item }: Props) => { 
    const { img, title, alt, navagacao } = Item;
    
    return (
        <section className={style.card}>   
            <div className={style.container}>
            <img src={img} alt={alt} className={style.image}/>
            <h4>{title}</h4>
            <p>{navagacao}</p>
            </div>
        </section>
        
    );
}

export default Cards;