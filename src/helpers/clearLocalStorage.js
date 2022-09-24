const clearLocalStorage = () => {
    localStorage.removeItem("isFinished")
    localStorage.removeItem("score")
    localStorage.removeItem("currQuestionIndex")
    localStorage.removeItem("settings")
    localStorage.removeItem("questions")

}

export default clearLocalStorage