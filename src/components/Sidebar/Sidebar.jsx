import {useState} from 'react';
import PropTypes from 'prop-types';
import SidebarItem from '@components/Sidebar/SidebarItem';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const Sidebar = ({items}) => {
    // rolled up or open sidebar
    const [min, setMin] = useState(false);
    const toggleMin = () => setMin(!min);
    // styles
    const st = classNames.bind(styles);
    const containerClasses = st({
        sidebar__container: true,
        sidebar__container_min: min,
    });
    const barsClasses = st({
        sidebar__bars: true,
        sidebar__bars_min: min,
    });

    return (
        <aside className={styles.sidebar} role='complementary'>
            <div className={containerClasses}>
                <div className={styles.sidebar__top}>
                    {/* <h1 className={min ? styles.sidebar__logo : `${styles.sidebar__logo} ${styles.sidebar__logo_active}`}>Logo</h1> */}
                    <div onClick={toggleMin} className={barsClasses}>
                        <div className={styles['sidebar__bars-item']}></div>
                    </div>
                </div>
                <div className={styles.sidebar__menu}>
                    {items.map((item, index) => <SidebarItem 
                        key={index} 
                        item={item} 
                        min={min}
                        toggleMin={toggleMin}
                    />)}
                </div>
            </div> 
        </aside>
    );
}

Sidebar.propTypes = {
    items: PropTypes.array,
} 

export default Sidebar;

        