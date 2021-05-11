//start button
const startBtn = document.querySelector(".start-btn")
const nextBtn = document.querySelector(".next-btn")
const qstCon = document.querySelector("#questioncontainer")
let shuffleQuestion
let currentQuestion
const questionElement = document.querySelector("#question")
const answerButtonElement = document.querySelector("#answer-button")


startBtn.addEventListener("click", startGame)

function startGame() {
    console.log("Starting Now")
    startBtn.classList.add('hide')
    shuffleQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    qstCon.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffleQuestion[currentQuestion])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer=> {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', pickAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextBtn.classList.add('hide')
    while (answerButtonElement){
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
}}

function pickAnswer(e) {
    const selectedBtn = e.target
    const correct = selectedBtn.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}



const questions = [
    {
        question: "What major key doesn't have sharps or flats?",
        answers: [
            {text:"C", correct: true },
            {text:"A", correct: false },
            {text:"M", correct: false },
            {text:"G", correct: false },

        ]
    }
]