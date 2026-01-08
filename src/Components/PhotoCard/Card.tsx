import Grid from "../PhotoGrid/Photo";

import style from "../PhotoGrid/Photo.module.css";

type Photo = {
  img: string;
  alt: string;
  title: string;
  navagacao: string;
};

type CardsProps = {
  ItemGaleria: Photo[];
};

const Cards: React.FC<CardsProps> = ({ ItemGaleria }) => {
  return (
    <div className={style.grid}>
      {ItemGaleria.map((item, index) => (
        <Grid key={index} Item={item} />
      ))}
    </div>
  );
};

export default Cards;