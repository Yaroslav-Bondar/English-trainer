import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputVerb from '../InputVerb';
import { checkAnswer } from '../../../services/services';
import { CHECK_INPUT_IRREGULAR_VERB } from '../../../constants/irregularVerbs';
import styles from './IrregularVerbsList.module.css';

const IrregularVerbsList = ({ verb,
                              verbForm,
                              getRandomVerb,
                              verbImagePath }) => {
    const [inputValue, setInputValue] = useState('');
    const [answer, setAnswer] = useState(null);

    function handleSubmit(event) {
        event.preventDefault();
        let delay = 1000;
        const checkedAnswer = checkAnswer(inputValue, verb[verbForm], CHECK_INPUT_IRREGULAR_VERB);
        setAnswer(checkedAnswer);
        if(!checkedAnswer) delay = 3000;
        setTimeout(()=> { 
            getRandomVerb();
            setInputValue('');
            setAnswer(null);
        }, delay);
    }
    return (
        <>            
            <img className = {styles.verb__img} src={verbImagePath} alt="verb"/>
            <form onSubmit={handleSubmit} className={styles.form}>
                {/* <div className={styles['form__input-wrapper']}> */}
                <InputVerb 
                    verb = {verb} 
                    verbForm = {verbForm}
                    answer = {answer}
                    inputValue = {inputValue}
                    setInputValue = {setInputValue}
                />
                <button type="submit">Отправить</button>
            </form>
        </>
    );
}

IrregularVerbsList.propTypes = {
    verb: PropTypes.array,
    verbForm: PropTypes.number,
    getRandomVerb: PropTypes.func,
    verbImagePath: PropTypes.string,
}

export default IrregularVerbsList;