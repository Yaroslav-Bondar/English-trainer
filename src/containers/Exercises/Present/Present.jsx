import PropTypes from 'prop-types';
import {Outlet} from 'react-router-dom';

const Present = () => {
    return (
        <>
            <h1>Present</h1>
            <Outlet />
        </>
    );
}

Present.propTypes = {
    // text: PropTypes.
}

export default Present;