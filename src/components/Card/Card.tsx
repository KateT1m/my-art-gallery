import { DeleteFilled, FrownFilled, HeartFilled } from "@ant-design/icons";
import { Card } from "antd"
import style from "./card.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { removeArt, toggleLike } from "../../services/cardListSlice";
import { Link } from "react-router-dom";
interface ICard {
    title: string;
    imageId: string;
    description: string;
    cardId: number;
    isMyArt: boolean;
    myUrl: string;
}

export const CardUI: React.FC<ICard> = ({title, imageId, description, cardId, isMyArt, myUrl}) => {
    const dispatch = useDispatch();
    const handleLikeButton = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(toggleLike(cardId));
    }
    const handleDeleteButton = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(removeArt(cardId));
    };
    const url = (imageId) ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg` : myUrl;
    const isLiked = useSelector((state) => state.cardList.arts.find((card) => card.id === cardId)?.isLiked);
    return (
        <li className={style.list_item}>
            <Link to={`/products/${cardId}`}>
                <Card className={style.card} hoverable>
                    <button className={style.button} onClick={handleLikeButton}>
                        <HeartFilled  className={isLiked ? style.heartIconActive : style.heartIcon} />
                    </button>
                    {(isMyArt) ? 
                    <button className={style.button} onClick={handleDeleteButton}>
                        <DeleteFilled className={style.deleteIcon} />
                    </button> : null}
                    {(url) ? <img className={style.image} alt={title} src={url} />: <FrownFilled className={style.noImageIcon}/>}
                    <article className={style.article}>
                        <h2> {title} </h2>
                        {(description) ? <p className={style.description}> {description} </p> : <p>No description</p>}
                    </article>
                </Card>
            </Link>
        </li>
    )
}