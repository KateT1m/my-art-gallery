import style from './buttonUi.module.scss';

interface IButtonUI {
    title: string,
    handleClick?: () => void,
    buttonType: 'submit' | 'button'
}

export const ButtonUI: React.FC<IButtonUI> = ({title, handleClick, buttonType}) => {

    return (
        <div className={style.container}>
            <button type = {buttonType} className={style.button} onClick={handleClick}>{title}</button>
        </div>
    )
}