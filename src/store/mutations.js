const UPDATE_QUIZ_SETTINGS = (state, settings) => {
    state.quiz.settings = settings
}

const UPDATE_QUESTIONS = (state, questions) => {
    state.quiz.questions = questions
}

const INCREMENT_CURR_QUESTION_INDEX = state => state.quiz.currQuestionIndex++
const SET_CURR_QUESTION_INDEX = (state, index) => state.quiz.currQuestionIndex = index

const INCREMENT_SCORE = state => state.quiz.score++
const SET_SCORE = (state, score) => state.quiz.score = score

const SET_IS_FINISHED_QUIZ = (state, isFinished) => state.quiz.isFinished = isFinished

export default {
    UPDATE_QUIZ_SETTINGS,
    UPDATE_QUESTIONS,
    INCREMENT_CURR_QUESTION_INDEX,
    SET_CURR_QUESTION_INDEX,
    INCREMENT_SCORE,
    SET_SCORE,
    SET_IS_FINISHED_QUIZ
}