import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import IrregularVerbsList from '../../components/IrregularVerbs/IrregularVerbsList';
import { getRandomNumber } from '../../services/services';
import { IRREGULAR_VERBS_DATA } from '../../data/irregularVerbs/irregularVerbsDataTmp';
import { MAX_FORM_VERB, VERB_IMAGE_INDEX } from '../../constants/irregularVerbs';
import styles from './IrregularVerbs.module.css';

const IrregularVerbs = () => {
    const [verb, setVerb] = useState();
    const [verbForm, setVerbForm] = useState();
    const [verbImagePath, setVerbImagePath] = useState();
  
    function getRandomVerb() {
        const maxValue = IRREGULAR_VERBS_DATA.length;
        const randomNumber = getRandomNumber(maxValue);
        const randomForm = getRandomNumber(MAX_FORM_VERB);
        const randomVerbData = IRREGULAR_VERBS_DATA[randomNumber];
        const randomVerb = randomVerbData
            .filter((item, index) => {
                return index < VERB_IMAGE_INDEX;
        });
        const randomVerbImage = randomVerbData[VERB_IMAGE_INDEX];

        setVerb(randomVerb);
        setVerbForm(randomForm);
        setVerbImagePath(randomVerbImage);
    }
    useEffect(()=> {
        getRandomVerb();
    },[]);
    
    return (
        <>  
            <div className={styles.wrapper}>
                {
                    verb &&
                        <IrregularVerbsList
                            getRandomVerb = {getRandomVerb} 
                            verb = {verb}
                            verbForm = {verbForm}
                            verbImagePath = {verbImagePath}
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