import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({item, min, toggleMin}) => {
    // show/hide submenu
    const [open, setOpen] = useState(false);
    // open submenu and minified sidebar
    const fullOpen = open && !min;
    if(item.childrens) {
        return (
            <div className={styles.sidebar__item}>
                <div 
                    onClick={() => {
                        if(min) {toggleMin(!min); setOpen(true)} else {setOpen(!open)}
                    }} 
                    className={styles.sidebar__title}
                >
                    <div className={styles['sidebar__title-container']}>
                        {/* set center modifier when sidebar is minimized */}
                        <div className={min ?`${styles['sidebar__title-icon']} ${styles['sidebar__title-icon_center']} folder` : `${styles['sidebar__title-icon']} folder`}>
                            <div className={fullOpen ? "folder__container folder__container_open" : "folder__container"}>
                                <div className="folder__backside"></div>
                                <div className="folder__file-container">
                                    <div className="folder__file"></div>
                                </div>
                                <div className="folder__frontside">
                                    {item.icon && <div class={`folder__icon ${item.icon}`}></div>}
                                </div>
                            </div>
                        </div>
                        <span 
                            className={!min ? `${styles['sidebar__title-item']} ${styles['sidebar__title-item_active']}` : styles['sidebar__title-item']}
                        >
                            {item.title}
                        </span>
                    </div>
                </div>
                <div className={fullOpen ? `${styles.sidebar__content} ${styles.sidebar__content_active}` : styles.sidebar__content}>
                    {item.childrens.map((child, index) => <SidebarItem item={child} key={index} min={min}/>)}
                </div>
            </div>    
        );
    } else {
        return (
            <NavLink to={item.path || '#'} className={`${styles.sidebar__item} ${styles.sidebar__item_plain}`}>
                {item.icon && <div className={`${styles['sidebar__plain-icon']} ${item.icon}`}></div>}
                <div 
                    className={!min ? `${styles['sidebar__plain-title']} ${styles['sidebar__plain-title_active']}` : styles['sidebar__plain-title']}
                >
                    {item.title}
                </div>
            </NavLink>
        )
    }
}

SidebarItem.propTypes = {
    item: PropTypes.object,
}

export default SidebarItem;