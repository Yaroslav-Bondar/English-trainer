import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import InputVerb from '@components/Exercises/IrregularVerbs/InputVerb';
import {incrementCorrectIrregularVerb,
        addIncorrectIrregularVerb} from '@store/actions';
import {checkAnswer} from '@services/common';
import {CHECK_INPUT_IRREGULAR_VERB} from '@constants/irregularVerbs';
import styles from './IrregularVerbsList.module.scss';

const IrregularVerbsList = ({runSetData, 
                            verbData: vd 
                            }) => {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState(null);
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        let delay = 1000;
        const checkedAnswer = checkAnswer(inputValue, vd.checkedVerb, CHECK_INPUT_IRREGULAR_VERB);

        setAnswer(checkedAnswer);
        if(!checkedAnswer) {
            delay = 3000;
            dispatch(addIncorrectIrregularVerb());
        } else {
            dispatch(incrementCorrectIrregularVerb());
        };
        setTimeout(()=> { 
            runSetData();
            setInputValue('');
            setAnswer(null);
        }, delay);
    }
    
    return (
        <>
            <h3 className={styles.verb__title}>Irregular Verbs Trainer</h3>
            <img className={styles.verb__img} src={process.env.PUBLIC_URL + vd.verbImage} alt="verb"/>
            <div className={styles.verb__native}>{vd.nativeVerb}</div>
            <form onSubmit={handleSubmit} className={styles.form}>
                <InputVerb
                    verbData = {vd} 
                    answer = {answer}
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                />
                <button className={styles.verb__submit} type="submit">Отправить</button>
            </form>
        </>
    );
}

IrregularVerbsList.propTypes = {
    runSetData: PropTypes.func,
    verbData: PropTypes.object,
}

export default IrregularVerbsList;