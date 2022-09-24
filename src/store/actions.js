import formatQuestions from "@/helpers/formatQuestions";

const startQuiz = async ({ commit }, e) => {
    console.log('starting a new quiz...')
    //get and set settings
    const settings = Object.fromEntries(Array.from(new FormData(e.target)));
    commit("UPDATE_QUIZ_SETTINGS", settings)    //save in store
    localStorage.setItem('settings', JSON.stringify(settings))   //save in the local storage
    
    //fetch questions
    const url = `https://opentdb.com/api.php?amount=${settings.questions_amount}&category=${settings.category}&difficulty=${settings.difficulty}`
    const res = await fetch(url);
    const { results, response_code } = await res.json();
    if (response_code !== 0) return  //guard
    
    //format and save questions
    const questions = formatQuestions(results)
    commit("UPDATE_QUESTIONS", questions)
    localStorage.setItem('questions', JSON.stringify(questions))
    
    //prepare quiz info
    localStorage.setItem('currQuestionIndex', '0')
    localStorage.setItem('score', '0')
    commit("SET_IS_FINISHED_QUIZ",false)
    localStorage.setItem('isFinished', 'false')
}

const restoreState = ({commit}) => {
    commit("UPDATE_QUESTIONS", JSON.parse(localStorage.getItem("questions")))
    commit("SET_CURR_QUESTION_INDEX", +localStorage.getItem("currQuestionIndex"))
    commit("SET_SCORE", +localStorage.getItem("score"))
    commit("SET_IS_FINISHED_QUIZ", localStorage.getItem("isFinished") === 'true' ? true : false)
}

const resetState = ({ commit, state }) => {
    commit("UPDATE_QUIZ_SETTINGS",{})
    commit("UPDATE_QUESTIONS", [])
    commit("SET_CURR_QUESTION_INDEX", 0)
    commit("SET_SCORE", 0)
    commit("SET_IS_FINISHED_QUIZ",false)
    
}

const increamentCurrQuestionIndex = ({ commit, state }) => {
    localStorage.setItem('currQuestionIndex', (state.quiz.currQuestionIndex + 1).toString())
    commit("INCREMENT_CURR_QUESTION_INDEX")
}

const increamentScore = ({ commit, state }) => {
    localStorage.setItem('currQuestionIndex', localStorage.getItem("currQuestionIndex") + 1)
    commit("INCREMENT_SCORE")
}

const nextQuestion = ({ commit, state }, isCorrect) => {
    if (state.quiz.currQuestionIndex + 1 === +state.quiz.questions.length) {
        if (isCorrect) {
             localStorage.setItem('score',(+localStorage.getItem('score') +1).toString())
            commit("INCREMENT_SCORE")
        }
        commit("SET_IS_FINISHED_QUIZ",true)
        localStorage.setItem('isFinished', 'true')
        return
    }
    localStorage.setItem('currQuestionIndex', (+localStorage.getItem('currQuestionIndex') +1).toString())
    commit("INCREMENT_CURR_QUESTION_INDEX")
    if (isCorrect) {
        localStorage.setItem('score',(+localStorage.getItem('score') +1).toString())
        commit("INCREMENT_SCORE")
    }
}


export default { 
    startQuiz,
    increamentCurrQuestionIndex,
    increamentScore,
    nextQuestion,
    restoreState,
    resetState
}