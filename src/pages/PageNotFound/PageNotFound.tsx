import { Link } from "react-router-dom"
import { ButtonUI } from "../../components/ButtonUI/ButtonUI"
import style from './pageNotFound.module.scss'

export const PageNotFound = () => {
    return (
        <div className={style.pageNotFound}>
            <h1>This page doesn't exist</h1>
            <Link to='/products'><ButtonUI buttonType='button' title = {'Back to gallery'} handleClick={() => {}}/></Link>
        </div>
    )
}