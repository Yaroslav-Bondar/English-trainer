import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
// import PropTypes from 'prop-types';
import IrregularVerbsList from '@components/Exercises/IrregularVerbs/IrregularVerbsList';
import {setTotalIrregularVerbs} from '@store/actions';
import {getRandomVerbData} from '@services/irregularVerbs';
import {IRREGULAR_VERBS_DATA} from '@data/irregularVerbs/irregularVerbsData';
import styles from './IrregularVerbs.module.css';

const IrregularVerbs = () => {
    const [verbData, setVerbData] = useState(null);
    const dispatch = useDispatch();

    dispatch(setTotalIrregularVerbs(IRREGULAR_VERBS_DATA.length));
    
    function runSetData() {
        setVerbData(getRandomVerbData(IRREGULAR_VERBS_DATA));
    }
    useEffect(()=> {
        runSetData();
    },[]);
    
    return (
        <>  
            <div className={`${styles.container} _wrapper`}>
                {
                    verbData &&
                        <IrregularVerbsList
                            runSetData = {runSetData}
                            verbData = {verbData}
                        />
                }
            </div>    
        </>
    );
}
// IrregularVerbs.propTypes = {
//     // text: PropTypes.
// }

export default IrregularVerbs;