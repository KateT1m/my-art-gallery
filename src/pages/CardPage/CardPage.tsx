import { Link, useParams } from "react-router-dom";
import { useSelector } from "../../services/store";
import { Preloader } from "../../components/Preloader/Preloader";
import style from './cardPage.module.scss'
import { FrownFilled } from "@ant-design/icons";
import { ButtonUI } from "../../components/ButtonUI/ButtonUI";

export const CardPage = () => {
    const params = useParams();
    const id = Number(params.id);
    const art = useSelector(state => state.cardList.arts.find((card) => card.id === id));
    if (!art) {
        return <Preloader />
    }
    const url = (art.image_id) ? `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg` : art.myUrl;
    return (
        <div className={style.cardPage}>
            <h1>{art.title}</h1>
            {(url) ? <img className={style.image} alt={art.title} src={url} />: <FrownFilled className={style.icon}/>}
            <p>Artist: {art.artist_display}</p>
            <p>Date display: {art.date_display}</p>
            <p>Place of origin: {art.place_of_origin}</p>
            <p>{art.publication_history}</p>
            <Link to='/'><ButtonUI buttonType='button' title = {'Back to gallery'} handleClick={() => {}}/></Link>
        </div>
    )
}