const getAppName = state => state.appName

const getQuizSettings = (state) => state.quiz.settings;

const getAllQuestions = state => state.quiz.questions;

const getCurrQuestionIndex = state => state.quiz.currQuestionIndex;

const getCardColors = state => state.quiz.cardColors;

const getCurrQuestion = state => {
    if (!state.quiz.questions.length === 0) return {}
    const filtered = state.quiz.questions.filter(question => question.id === state.quiz.currQuestionIndex);
    return filtered[0];
};

const getScore = state => state.quiz.score;

const getIsFinished = state => state.quiz.isFinished

export default { getAppName, getScore, getQuizSettings, getAllQuestions, getCurrQuestionIndex, getCurrQuestion, getCardColors, getIsFinished }