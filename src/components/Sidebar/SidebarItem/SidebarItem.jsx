import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
import styles from './SidebarItem.module.css';

const SidebarItem = ({item, min, toggleMin}) => {
    const [open, setOpen] = useState(false);
    // console.log('min setItem ', min);
    console.log('open && !min ', open && !min);

    if(item.childrens) {
        return (
            <div className={open && !min ? `${styles.sidebar__item} ${styles.sidebar__item_open}` : styles.sidebar__item}>
                <div onClick={() => setOpen(!open)} className={styles.sidebar__title}>
                    <div className={styles['sidebar__title-container']}>
                        <div 
                            className={`${styles['sidebar__item-title-icon']} folder`}
                            onClick={() => {if(min) {toggleMin(!min); setOpen(true)} }}
                        >
                            <div className={open ? "folder__container folder__container_open" : "folder__container"}>
                                <div className="folder__backside"></div>
                                <div className="folder__file-container">
                                    <div className="folder__file"></div>
                                    <div className="folder__file"></div>
                                    <div className="folder__file"></div>
                                    <div className="folder__file"></div>
                                    <div className="folder__file"></div>
                                </div>
                                <div className="folder__frontside">
                                    {item.icon && <div class="folder__icon bi-github"></div>}
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
                <div className={styles.sidebar__content}>
                    {item.childrens.map((child, index) => <SidebarItem item={child} key={index} min={min}/>)}
                </div>
            </div>    
        );
    } else {
        return (
            <NavLink to={item.path || '#'} className={`${styles.sidebar__item} ${styles.sidebar__item_plain}`}>
                {item.icon && <i className={styles['sidebar__item-plain-icon']}>icon</i>}
                <span 
                    className={!min ? `${styles['sidebar__item-title-plain']} ${styles['sidebar__item-title-plain_active']}` : styles['sidebar__item-title-plain']}
                >
                    {item.title}
                </span>
            </NavLink>
        )
    }
}

SidebarItem.propTypes = {
    item: PropTypes.object,
}

export default SidebarItem;