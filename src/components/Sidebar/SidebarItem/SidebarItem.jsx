import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './SidebarItem.module.css';

const SidebarItem = ({item, min}) => {
    const [open, setOpen] = useState(false);
    console.log('min setItem ', min);
    console.log('open && !min ', open && !min);

    if(item.childrens) {
        return (
            <div className={(open && !min) ? `${styles.sidebar__item} ${styles.sidebar__item_open}` : styles.sidebar__item}>
                <div className={styles.sidebar__title}>
                    {/* <div> */}
                        {/* {item.icon} */}
                        {item.icon && <i className={`${styles['sidebar__item-title-icon']}`}>Icon</i>}
                        <span 
                            className={!min ? `${styles['sidebar__title-item']} ${styles['sidebar__title-item_active']}` : styles['sidebar__title-item']}
                        >
                            {item.title}
                        </span>
                    {/* </div> */}
                    {/* `${bi-chevron-down}  */}
                    <i 
                        className={!min ? `${styles['sidebar__toggle-btn']} ${styles['sidebar__toggle-btn_active']}` : styles['sidebar__toggle-btn']} 
                        onClick={() => setOpen(!open)}
                    >
                        icon
                    </i>
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