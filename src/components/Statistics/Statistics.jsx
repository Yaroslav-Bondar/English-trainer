// import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Tooltip from '@ui/UITooltip';
import {FcStatistics} from 'react-icons/fc';
import styles from './Statistics.module.scss';

const Statistics = () => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    <Tooltip content={'statistics'} position={'left'}>
                        <NavLink
                            className={`${styles.list__link}`}
                            to='/statistics'
                        >
                            <FcStatistics/>
                        </NavLink>
                    </Tooltip>
                </li>
            </ul>
        </nav>
    );
}

// Statistics.propTypes = {
//     text: PropTypes.
// }

export default Statistics;