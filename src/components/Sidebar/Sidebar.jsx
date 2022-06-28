import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {exerciseRoutesConfig} from '../../routes/routesConfig';
import styles from './Sidebar.module.css';
// {children}
const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__container}>
                {/* <div className={styles.sidebar}> */}
                    <div className={styles.sidebar__top}>
                        <h1 className={styles.sidebar__logo}>Logo</h1>
                        <div className={styles.sidebar__bars}>
                            {/* <FaBars/> */}
                            
                        </div>
                    </div>
                    {exerciseRoutesConfig.map(({path, icon, name}, index) => (
                        <NavLink 
                            to={path} 
                            key={index} 
                            className={styles.link}
                            activeclassName={styles.link_active}
                        >
                            {/* <div className={styles.icon}>{icon}</div> */}
                            <div className={styles.link__text}>{name}</div>
                        </NavLink>
                    ))}
                {/* </div> */}
                {/* <main>{children}</main> */}
            </div>
        </div>
    );
}

Sidebar.propTypes = {
    // children: PropTypes.object
}

export default Sidebar;