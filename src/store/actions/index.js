import {
        ADD_TOTAL_IRREGULAR_VERBS,
        INCREMENT_CORRECT_IRREGULAR_VERB,
        ADD_INCORRECT_IRREGULAR_VERB} from '@store/constants/actionTypes';

export const setTotalIrregularVerbs = total => (
    {
        type: ADD_TOTAL_IRREGULAR_VERBS,
        payload: total,
    }
)

export const incrementCorrectIrregularVerb = () => (
    {
        type: INCREMENT_CORRECT_IRREGULAR_VERB,
    }
);

export const addIncorrectIrregularVerb = () => (
    {
        type: ADD_INCORRECT_IRREGULAR_VERB,
    }
);