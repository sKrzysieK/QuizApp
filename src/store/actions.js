const formatQuestions = (questions) => {
    let questionId = 0;
    questions.forEach( result => {
        //add a question id
        result.id = questionId
        questionId++

        //reformat answers
        let answers = [result.correct_answer, ...result.incorrect_answers]
        let answersMixed = [0, 0, 0, 0]
        const answersLength = answers.length
        while(answers.length > 0){
            const randomIndex = Math.floor(Math.random() * answersLength);
            if (answersMixed[randomIndex] === 0) {
                answersMixed[randomIndex] = {
                    text: answers.pop(), isCorrect: answers.length === 0
                }
            }
        }
        answersMixed = answersMixed.filter(answer => answer !== 0)
        result.answers = answersMixed
        
    })
    return questions
}

const startQuiz = async ({ commit }, e) => {
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

// const fetchQuestions = async ({ commit, state }) => {
//     const settings = state.quiz.settings;

//     const url = `https://opentdb.com/api.php?amount=${settings.questions_amount}&category=${settings.category}&difficulty=${settings.difficulty}`
//     const res = await fetch(url);
//     const { results, response_code } = await res.json();
//     if(response_code !== 0) return
    
//     // let questionId = 0;
//     // results.forEach( result => {
//     //     //add a question id
//     //     result.id = questionId
//     //     questionId++
//     //     //reformat answers
//     //     let answers = [result.correct_answer, ...result.incorrect_answers]
//     //     let answersMixed = [0, 0, 0, 0]
//     //     const answersLength = answers.length
//     //     while(answers.length > 0){
//     //         const randomIndex = Math.floor(Math.random() * answersLength);
//     //         if (answersMixed[randomIndex] === 0) {
//     //             answersMixed[randomIndex] = {
//     //                 text: answers.pop(), isCorrect: answers.length === 0
//     //             }
//     //         }
//     //     }
//     //     answersMixed = answersMixed.filter(answer => answer !== 0)
//     //     result.answers = answersMixed
        
//     //     console.log(result)
//     // })
//     const questions = formatQuestions(results)
//     commit("UPDATE_QUESTIONS", questions)
// } 

const increamentCurrQuestionIndex = ({ commit, state }) => {
    localStorage.setItem('currQuestionIndex', (state.quiz.currQuestionIndex + 1).toString())
    commit("INCREMENT_CURR_QUESTION_INDEX")
}

const increamentScore = ({ commit, state }) => {
    console.log(localStorage.getItem('currQuestionIndex') +1)
    localStorage.setItem('currQuestionIndex', localStorage.getItem("currQuestionIndex") + 1)
    commit("INCREMENT_SCORE")
}

const nextQuestion = ({ commit, state }, isCorrect) => {
    if (state.quiz.currQuestionIndex + 1 === +state.quiz.questions.length) {
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
    // fetchQuestions, 
    increamentCurrQuestionIndex,
    increamentScore,
    nextQuestion,
    restoreState
}