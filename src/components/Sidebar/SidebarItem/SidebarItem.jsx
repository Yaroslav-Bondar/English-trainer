import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({item, min, toggleMin}) => {
    // show/hide submenu
    const [open, setOpen] = useState(false);
    // open submenu and minified sidebar
    const fullOpen = open && !min;
    const st = classNames.bind(styles);
    if(item.childrens) {
        const titleIconClass = st({
            'sidebar__title-icon': true,
            'sidebar__title-icon_center': min, 
            folder: true,
        });
        const folderContainerClass = st({
            'folder__container': true,
            'folder__container_open': fullOpen,
        });
        const titleItemClass = st({
            'sidebar__title-item': true,
            'sidebar__title-item_active': !min,

        });
        const contentClass = st({
            'sidebar__content': true,
            'sidebar__content_active': fullOpen,
        });
        return (
            <div className={st('sidebar__item')}>
                <div 
                    onClick={() => {
                        if(min) {toggleMin(!min); setOpen(true)} else {setOpen(!open)}
                    }} 
                    className={st('sidebar__title')}
                >
                    <div className={st('sidebar__title-container')}>
                        <div className={titleIconClass}> 
                            <div className={folderContainerClass}>
                                <div className="folder__backside"></div>
                                <div className="folder__file-container">
                                    <div className="folder__file"></div>
                                </div>
                                <div className="folder__frontside">
                                    {item.icon && <div className={`folder__icon ${item.icon}`}></div>}
                                </div>
                            </div>
                        </div>
                        <span className={titleItemClass}>
                            {item.title}
                        </span>
                    </div>
                </div>
                <div className={contentClass}>
                    {item.childrens.map((child, index) => <SidebarItem item={child} key={index} min={min}/>)}
                </div>
            </div>    
        );
    } else {
        const itemClass = ['sidebar__item', 'sidebar__item_plain'];
        const plainIconClass = st({
            'sidebar__plain-icon': true,
            'sidebar__plain-icon_center': min, 
            [`${item.icon}`]: true,
        });
        const plainTitleClass = st({
            'sidebar__plain-title': true,
            'sidebar__plain-title_active': !min,
        });
        return (
            <NavLink to={item.path || '#'} className={st(itemClass)}>
                {item.icon &&
                    <div className={plainIconClass}></div>
                }
                <div className={plainTitleClass}>
                    {item.title}
                </div>
            </NavLink>
        )
    }
}

SidebarItem.propTypes = {
    item: PropTypes.object,
    min: PropTypes.bool,
    toggleMin: PropTypes.func,
}

export default SidebarItem;