import {INCREMENT_CORRECT_IRREGULAR_VERB_ANSWERS} from '@store/constants/actionTypes';

const initialState = {
    correct: 0,
    incorrect: 0,
};

const irregularVerbsReducer = (state = initialState, action) => {
   switch(action.type) {
        case INCREMENT_CORRECT_IRREGULAR_VERB_ANSWERS:
            return {
                ...state,
                correct: ++state.correct,
            };
        default: 
            return state;
    } 
}

export default irregularVerbsReducer;