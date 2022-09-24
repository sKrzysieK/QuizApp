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

export default formatQuestions