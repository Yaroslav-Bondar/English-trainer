import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InputVerb.module.scss';


class InputVerb extends React.Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this);
        this.input = React.createRef();
    }
    static propTypes = {
        answer: PropTypes.bool,
        inputValue: PropTypes.string,
        verbData: PropTypes.object,
        setInputValue: PropTypes.func,
    }
    handleInput(event) {
        this.props.setInputValue(event.target.value);
    }
    getFocus() {
        this.input.current.focus()
    }
    componentDidMount() {
        this.getFocus();
    }
    componentDidUpdate() {
        this.getFocus();
    }

    render() {
        const {answer, 
                inputValue, 
                verbData: {
                    verbForms, 
                    checkedVerbIndex, 
                    checkedVerb,
                }
            } = this.props;
        const st = classNames.bind(styles);    

        return (
            <>  
                <div className={styles['input-container']}>
                    {verbForms.map((verb, index) => {
                        let value = inputValue;
                        let disabled = false;
                        let handler = this.handleInput;
                        let style;
                        let inputRef = null; 
                        // not active
                        if(index !== checkedVerbIndex) {
                            value = verb;
                            disabled = true;
                            handler = () => {};
                            style = st('form__input');
                        }
                        // active
                        if(index === checkedVerbIndex) {
                            inputRef = this.input;
                            // answer === null when the component is first mounted
                            style = st({
                                form__input: true,
                                form__input_answer_right : answer,
                                form__input_answer_wrong : answer === false,
                            })
                        }
                        return (
                                    <input
                                        key = {index}
                                        type = "text"
                                        value = {value}
                                        disabled = {disabled}
                                        onChange = {(e) => {handler(e)}}
                                        className={style}
                                        ref = {inputRef}
                                    />
                                )    
                    })}
                </div>
                <div className={st('answer')}>
                    {answer === false && <b>{checkedVerb}</b>}
                </div>
            </>   
        )
    }
}
export default InputVerb;