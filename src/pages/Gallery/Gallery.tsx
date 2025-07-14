import { Content } from "antd/es/layout/layout"
import { CardList } from "../../components/CardList/CardList"
import { useSelector } from "../../services/store";
import { Preloader } from "../../components/Preloader/Preloader";
import { ButtonUI } from "../../components/ButtonUI/ButtonUI";
import style from './gallery.module.scss';
import { useState } from "react";

export const Gallery = () => {
    const filteredArt = useSelector(state => state.cardList.favoriteArts);
    const allArt = useSelector(state => state.cardList.arts);

    const [isFavoritesActive, setIsFavoritesActive] = useState(false);

    const art = (filteredArt.length && isFavoritesActive) ? filteredArt : allArt;

    const toggleState = () => {
        setIsFavoritesActive(!isFavoritesActive);
    }
    return (
        <Content>
            <div className={style.buttons}>
                <ButtonUI buttonType="button" title = {isFavoritesActive ? 'Show All Art' : 'Show My Favorites'} handleClick={toggleState}/>
            </div>
            {(filteredArt.length === 0) && (isFavoritesActive === true) && <h1 style={{textAlign: 'center'}}>You didn't add any favorites yet</h1>}
            {(art) ? <CardList data={art}/> : <Preloader />}
        </Content>
    )
}