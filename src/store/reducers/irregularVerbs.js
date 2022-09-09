import {INCREMENT_CORRECT_IRREGULAR_VERB_ANSWERS} from '@store/constants/actionTypes';

const irregularVerbs = (state, action) => {
   switch(action.type) {
        case INCREMENT_CORRECT_IRREGULAR_VERB_ANSWERS:
            return {
                ...state,
                action.payload,
            };
        default: 
            return state;
    } 
}

export default irregularVerbs;