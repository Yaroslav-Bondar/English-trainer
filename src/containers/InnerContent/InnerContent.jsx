// import PropTypes from 'prop-types';
import {Outlet} from 'react-router-dom';
import styles from './InnerContent.module.css';

const InnerContent = () => {
    return (
        <div className={styles[`inner-content__container`]}>
            <Outlet/>
        </div>
    );
}

InnerContent.propTypes = {
    // text: PropTypes.
}

export default InnerContent;