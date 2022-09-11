import {ADD_TOTAL_IRREGULAR_VERBS,
        INCREMENT_CORRECT_IRREGULAR_VERB,
        ADD_INCORRECT_IRREGULAR_VERB,} from '@store/constants/actionTypes';

const initialState = {
    total: 0,
    correct: 0,
    incorrect: 0,
};

const irregularVerbsReducer = (state = initialState, action) => {
   switch(action.type) {
        case ADD_TOTAL_IRREGULAR_VERBS: 
            return {
                ...state,
                total: action.payload,
            }
        case INCREMENT_CORRECT_IRREGULAR_VERB:
            return {
                ...state,
                correct: ++state.correct,
            };
        case ADD_INCORRECT_IRREGULAR_VERB:
            return {
                ...state,
                incorrect: ++state.incorrect,
            };
        default: 
            return state;
    } 
}

export default irregularVerbsReducer;