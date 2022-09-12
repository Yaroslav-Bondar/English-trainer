import {getRandomNumber} from '@services/common';
import {MAX_VERB_INDEX, 
        NATIVE_VERB_INDEX, 
        VERB_IMAGE_INDEX} from '@constants/irregularVerbs';

export function getRandomVerbData(data) {
    const randomIndex = getRandomNumber(data.length - 1);
    const checkedVerbIndex = getRandomNumber(MAX_VERB_INDEX);
    
    const verbData = data[randomIndex];
    
    const verbForms = verbData.slice(0, MAX_VERB_INDEX + 1);
    const checkedVerb = verbForms[checkedVerbIndex];
    const nativeVerb = verbData[NATIVE_VERB_INDEX]; 
    const verbImage = verbData[VERB_IMAGE_INDEX];

    return {
        verbForms,
        checkedVerb,
        checkedVerbIndex,
        nativeVerb,
        verbImage,    
    }
}