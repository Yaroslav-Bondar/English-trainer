export function checkAnswer(answer, underTest, test) {
    const checkInput = test.test(answer);
    const checkAnswer = new RegExp(`\\b${answer.trim()}\\b`, 'i').test(underTest);
    return checkInput && checkAnswer ? true : false;
}
/**
 * random value generation in the range from 0 to max
 * (the value passed to the function).Including max.
 * 
 * @param {Number} max - random maximum value
 * @returns {Number} random value 
 */
export const getRandomNumber = max => Math.round(Math.random() * max);
