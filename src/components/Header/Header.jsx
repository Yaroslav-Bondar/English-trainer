import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';

// extends React.Component

const Header = () => {
    // render() {
        return (
            <div className={styles.container}>
                <ul className={styles.list__container}>
                    <li>
                        <NavLink to="/" className={styles.link}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/grammar-trainers">Grammar Trainers</NavLink>        
                    </li>
                </ul>
            </div>
        );
    // }
}

export default Header;
