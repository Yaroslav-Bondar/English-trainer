// import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import items from '../../data/sidebar/exerciseSidebar.json';
// import {exerciseRoutesConfig} from '../../routes/routesConfig';

// close sidebar
// /home/yaroslav/develop/web/apps/React/example/sidebar/deshboard-sidebar
// https://github.com/miladsiddiquey/deshboard-sidebar/blob/main/src/components/Sidebar.jsx
// https://www.youtube.com/watch?v=IathdVB65Lw&t=706s

// dropdown sidebar
// /home/yaroslav/develop/web/apps/React/example/sidebar/OshuvoO/dropdown-sidebar/react-sidebar/src
// https://www.youtube.com/watch?v=sOhLV-lfgjs&t=1191s
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [min, setMin] = useState(false);
    const toggleMin = () => setMin(!min); 
    return (
        <aside className={styles.sidebar} role='complementary'>
            <div className={min ? `${styles.sidebar__container} ${styles.sidebar__container_min} _container` : `${styles.sidebar__container} _container`}>
                <div className={styles.sidebar__top}>
                    <h1 className={min ? styles.sidebar__logo : `${styles.sidebar__logo} ${styles.sidebar__logo_active}`}>Logo</h1>
                    <div onClick={toggleMin} className={min ? `${styles.sidebar__bars} ${styles.sidebar__bars_min}` : styles.sidebar__bars}>
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
        {/* </div> */}
            {/* </div>  */}
        </aside>
    );
}

// Sidebar.propTypes = {
//     // children: PropTypes.object
// } 

export default Sidebar;

        