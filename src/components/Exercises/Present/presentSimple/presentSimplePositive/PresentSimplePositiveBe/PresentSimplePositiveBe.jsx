import PropTypes from 'prop-types';
import styles from './PresentSimplePositiveBe.module.css';
import {PRESENT_SIMPLE_POSITIVE_BE} 
    from '../../../../../../data/present/presentSimple/positive/presentSimplePositiveBe/presentSimplePositiveBe.js';
    const PresentSimplePositiveBe = () => {
        console.log('PRESENT_SIMPLE_POSITIVE_BE', PRESENT_SIMPLE_POSITIVE_BE);
    return (
        <>
            PresentSimplePositiveBe
            {PRESENT_SIMPLE_POSITIVE_BE.map(({question}) => {
                <li>{question}</li>
            })}
        </>
    )
}

PresentSimplePositiveBe.propTypes = {
    // text: PropTypes.
}
export default PresentSimplePositiveBe;