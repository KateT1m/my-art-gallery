import { BankOutlined } from '@ant-design/icons';
import style from './header.module.scss';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;


export const HeaderUI = () => {

    return (
        <Header className={style.header}>
            <nav className={style.nav}>
                <Link to='/create-product'>
                    <h1 className={style.menu_button}>
                        Add Art
                    </h1> 
                </Link>
            </nav>
            <Link to='/'><BankOutlined className={style.logo}/></Link>
        </Header>
    )
}