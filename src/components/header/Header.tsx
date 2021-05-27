import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = (props: any) => {
    let loc = useLocation().pathname;

    return (
        <header className={styles.header}>
            <nav className={styles.header__menu}>
                <div className={styles.header__menu_mainLink}>
                <Link to='/'>
                    Courses
                </Link>
                </div>
                <div>
                <ul>
                { props.categoriesResponse.categoriesResponse.categories.map((item: any, i: any) => { 
                    return <li key={i}>
                        <Link to={`/${item}`} className={loc.indexOf(`/${item}`) === 0 ? styles.active : ""}>
                          { item }
                        </Link>
                    </li>
                }) 
                }
                </ul>
                </div>
            </nav>
        </header>
    );
}
export default observer(Header);