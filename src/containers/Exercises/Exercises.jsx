import {Routes, Route, Outlet, Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import PresentSimplePositiveBe 
//     from '../../components/Exercises/Present/presentSimple/presentSimplePositive/PresentSimplePositiveBe';
import Sidebar from '../../components/Sidebar';

import styles from './Exercises.module.css';

const Exercises = () => {
    return (
        <>
            <div className={styles.exercises__container}>
                <nav>
                    <Sidebar/>
                    {/* <Link to="present-simple-positive-be">present-simple-positive-be</Link> */}
                </nav>
                <div className={styles.exercises__content}>
                    <h1>Exercises</h1>
                    {/* <Routes> */}
                        {/* <Route element={Sidebar}></Route> */}
                        {/* <Route  */}
                            {/* path='/present-simple-positive-be'  */}
                            {/* element={<PresentSimplePositiveBe/>}  */}
                        {/* /> */}
                    {/* </Routes> */}
                    <div>
                        <Outlet/>
                    </div>
                </div> 
            </div>
        </>
    );
}

Exercises.propTypes = {
    // text: PropTypes.
}

export default Exercises;