// import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className='_wrapper'>
            <h1 className={styles.title}>Home Page</h1>
            <p className={styles.text}>Here you can improve your English !</p>
            <NavLink className={styles.link} to='grammar-trainers'>Grammar Trainers</NavLink>
            

        </div>
    );
}

// HomePage.propTypes = {
//     text: PropTypes.
// }

export default HomePage;