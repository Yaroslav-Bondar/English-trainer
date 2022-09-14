import {Routes, Route} from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import Present from './Present';
import PresentSimplePositiveBe 
    from '@components/Exercises/Present/presentSimple/presentSimplePositive/PresentSimplePositiveBe';
import PresentSimplePositive1 
    from '@components/Exercises/Present/presentSimple/presentSimplePositive/PresentSimplePositive1';
import IrregularVerbs from './IrregularVerbs';
import items from '@data/sidebar/exerciseSidebar.json';
import styles from './Exercises.module.css';

const Exercises = () => {
    return (
        <>
            <div className={styles.exercises__container}>
                <div className={styles.exercises__sidebar}>
                    <Sidebar items={items}/>
                </div>
                <div className={styles.exercises__content}>
                    <h1>Exercises</h1>
                    <Routes>
                        <Route
                            path='present'
                            element={<Present/>}
                        >
                            <Route 
                                path='present-simple-positive-be' 
                                element={<PresentSimplePositiveBe/>}
                            />
                            <Route 
                                path='present-simple-positive-1' 
                                element={<PresentSimplePositive1/>}
                            /> 
                        </Route>    
                        <Route 
                            path='irregular-verbs' 
                            element={<IrregularVerbs/>}
                        />
                    </Routes>    
                </div> 
            </div>
        </>
    );
}

export default Exercises;