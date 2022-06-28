import React from 'react';
// , Outlet
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className='_container _container_grow'>
                <ul className={styles.list}>
                    <li className={styles.list__item}>
                        <NavLink 
                            to="/home" 
                            className={styles.link}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.list__item}>
                        <NavLink 
                            className={styles.link} 
                            to="/exercises"
                        >
                            Exercises
                        </NavLink>        
                    </li>
                </ul>
            </nav>
            {/* <main> */}
                {/* <Outlet/> */}
            {/* </main> */}
        </header>
    );
}

export default Header;
