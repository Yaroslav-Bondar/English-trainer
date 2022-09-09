import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UITooltip.module.scss';

class Tooltip extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        content: PropTypes.string,
        position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        style: PropTypes.objectOf(PropTypes.string),
    }
    static defaultProps = {
        content: 'Tooltip content',
        style: {},
        position: 'top',
    }
    state = {
        visible: false,
    }
    show = () => {
        this.setVisibility(true);
    }
    hide = () => {
        this.setVisibility(false);
    }
    setVisibility = visible => {
        this.setState({visible});
    }
    render() {
        const {visible} = this.state;
        const {children, content, style, position} = this.props;
        const st = classNames.bind(styles);
        const itemClasses = st(
            'tooltip__item',
            'tooltip__item_position_' + position,
        );
        return (
            <div className={st('tooltip')}>
                {visible && <div style={style} className={itemClasses}>{content}</div>}
                <div
                    className={st('tooltip__target')}
                    onMouseEnter={this.show}
                    onMouseLeave={this.hide} 
                >
                    {children}
                </div>
            </div>
        )
    }
}

export default Tooltip;