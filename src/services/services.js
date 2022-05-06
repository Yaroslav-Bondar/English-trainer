export function checkAnswer(answer, underTest, test) {
    const checkInput = test.test(answer);
    const checkAnswer = new RegExp(`\\b${answer.trim()}\\b`, 'i').test(underTest);
    return checkInput && checkAnswer ? true : false;
}

export const getRandomNumber = max => Math.floor(Math.random() * max);
