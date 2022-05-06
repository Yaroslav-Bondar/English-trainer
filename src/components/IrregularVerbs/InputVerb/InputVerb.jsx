import React from 'react';
import Input from '../Input';
import { MAX_FORM_VERB } from '../../../constants/irregularVerbs';
import styles from './InputVerb.module.css';
class InputVerb extends React.Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.inputElement = React.createRef();
    }
    
    handleInput(event) {
        this.props.setInputValue(event.target.value);
    }
    getFocus() {
        this.inputElement.current.focus()
    }
    componentDidMount() {
        this.getFocus();
    }
    componentDidUpdate() {
        this.getFocus();
    }

    render() {
        const {answer, inputValue, verb, verbForm} = this.props;
        return (
            <>  
                Input Verb
                <div className={styles.verb__native}>{verb[MAX_FORM_VERB]}</div>
                    {verb.map((verb, index) => {
                        if (index >= MAX_FORM_VERB) return;
                        let value = inputValue;
                        let disabled = false;
                        let handler = this.handleInput;
                        let style;
                        let inputRef = null; 
                        // not active
                        if(index !== verbForm) {
                            value = verb;
                            disabled = true;
                            handler = () => {};
                            style = styles.form__input;
                        }
                        // active
                        if(index === verbForm) {
                            inputRef = this.inputElement;
                            // answer === null when the component is first mounted
                            style = answer === null ? styles.form__input : 
                                answer ? 
                                styles[`form__input_answer_right`] :
                                styles.form__input_answer_wrong;
                        }
                        return (
                                    <input
                                        type = "text"
                                        value = {value}
                                        disabled = {disabled}
                                        onChange = {(e) => {handler(e)}}
                                        className={style}
                                        ref = {inputRef}
                                    />
                                )    
                    })}
                    <div className={styles.answer}>
                        {answer === false && <b>{verb[verbForm]}</b>}
                    </div>
            </>   
        )
    }
}
export default InputVerb;