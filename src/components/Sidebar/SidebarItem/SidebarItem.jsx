import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import Tooltip from '@ui/UITooltip';
import classNames from 'classnames/bind';
import styles from './SidebarItem.module.scss';

const SidebarItem = ({item, min, toggleMin}) => {
    // show/hide submenu
    const [open, setOpen] = useState(false);
    // open submenu and minified sidebar
    const fullOpen = open && !min;
    const st = classNames.bind(styles);
    const toolTipStyles = {
        width: 'auto',
        bottom: '105%',
        padding: '3px 5px',
        color: '#ba776d',
        transform: 'translateY(0)',
        opacity: '.9',
        'white-space': 'nowrap',
    }
    const text = item.title;

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
        const html = <div className={st('sidebar__item')}>
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
        return min ? <Tooltip style={toolTipStyles} content={text}>{html}</Tooltip> : html;
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
        const html = <NavLink to={item.path || '#'} className={st(itemClass)}>
                        {item.icon &&
                            <span className={plainIconClass}></span>
                        }
                        <span className={plainTitleClass}>
                            {text}
                        </span>
                    </NavLink>
        return min ? <Tooltip style={toolTipStyles} content={text}>{html}</Tooltip> : html;
    }
}

SidebarItem.propTypes = {
    item: PropTypes.object,
    min: PropTypes.bool,
    toggleMin: PropTypes.func,
}

export default SidebarItem;