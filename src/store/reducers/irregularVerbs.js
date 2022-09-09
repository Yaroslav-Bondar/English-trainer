// import {ADD_CORRECT_IRREGULAR_VERB_ANSWER} from '

const irregularVerbs = (state, action) => {
   switch(action.type) {
        case 'ADD_CORRECT_IRREGULAR_VERB_ANSWER':
            return {
                ...state,
                action.payload,
            };
        default: 
            return state;
    } 
}

export default irregularVerbs;