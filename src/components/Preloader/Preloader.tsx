
import { LoadingOutlined } from '@ant-design/icons'
import style from './preloader.module.scss'

export const Preloader = () => {
    return (
        <>
            <div className={style.background}>
                <LoadingOutlined style={{ fontSize: 48, position : 'absolute', top: '50%', left: '50%'}}/>
            </div>
        </>
    )
}