import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import dashboard from '../../assets/images/dashboard.svg';
import shopping from '../../assets/images/shopping.svg';
import customer from '../../assets/images/customer.svg';

const Sidebar: React.FC = () => {
    
    let loc = useLocation().pathname;

    return (
        <div className={styles.sidebar}>
            <div className={styles.nav}>
                <nav className={styles.nav__menu}>
                    <ul>
                        <li>
                            <Link to='/' className={loc === '/' ? styles.active : ""}>
                                <img src={dashboard}
                                alt="dashboard" />
                            </Link>
                        </li>
                        <li>
                           <Link to='/shopping-list' className={loc.indexOf("/shopping-list") === 0 ? styles.active : ""}>
                                <img src={shopping} 
                                alt="shopping" />
                            </Link>
                        </li>
                        <li>
                            <Link to='/customer' className={loc.indexOf("/customer") === 0 ? styles.active : ""}>
                                <img src={customer} 
                                alt="customer" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
export default Sidebar;