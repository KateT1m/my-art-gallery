import type { FC } from "react"
import type { TArt } from "../../utils/types"
import { CardUI } from "../Card/Card"
import style from "./cardList.module.scss"
interface ICardList {
    data: TArt[]
}

export const CardList: FC<ICardList> = ({data}) => {
    return (
        <ul className={style.card_list}>
            {data.map((art: TArt) => {
                return (
                    <CardUI 
                    key = {art.id}
                    title = {art.title}
                    imageId = {art.image_id}
                    description = {art.publication_history}
                    cardId = {art.id}
                    isMyArt = {art.isMyArt}
                    myUrl = {art.myUrl}
                    />
                )
            })}
        </ul>
    )
}