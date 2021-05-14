//start button
const startBtn = document.querySelector(".start-btn")

startBtn.addEventListener("click", startGame)



//answer options
const opt1 = document.querySelector(".option1")
const opt2 = document.querySelector(".option2")
const opt3 = document.querySelector(".option3")
const opt4 = document.querySelector(".option4")
const qstCon = document.querySelector("#questioncontainer")
const resetBtn = document.querySelector(".play-again-btn")


//Event Listener for Buttons
opt1.addEventListener("click", getAnswer)
opt2.addEventListener("click", getAnswer)
opt3.addEventListener("click", getAnswer)
opt4.addEventListener("click", getAnswer)
// startBtn.addEventListener("click", (e))

resetBtn.addEventListener("click", playAgain)

function startGame() {
    console.log("Starting Now")
    startBtn.classList.add('hide')
    qstCon.classList.remove('hide')
    resetBtn.classList.add('hide')
    
}

function playAgain() {
    console.log("Lets do it!")
    qstCon.classList.add('hide')
    resetBtn.classList.remove('hide')
    score = score - score
    questionNum = 0
    startGame()
}


let score = 0
let questionNum = 0



function populate(){
    

    if(questionNum > allQuestions.length - 1){
        
        
        resetBtn.classList.remove('hide')
        if(score <= 30){
        return alert("You scored a " + score + ". You should really brush up on your music knowledge")
        } else if (score <= 60) {
        return alert( "You scored a " + score + ". Better luck next time. ")
        } else if(score <= 90)
        return alert("Impressive, you scored a " + score)
        else{
        return alert("Wow! You got a perfect score " + score)
        }
        
        
    } 
    
}


const allQuestions = [
    {
        question: "What major key doesn't have sharps or flats?",
        answer: [
            "C",
            "A",
            "G",
            "M"
        ],
        correctAnswer: 0,
    },
    {
        question: "How many keys does a full grand piano have?",
        answer: [
             "82",
             "78",
             "88",
             "104"
        ],
        correctAnswer: 2,
        
        
    },
    {
        question: "Which is a member of the brass family?",
        answer: [
             "Guitar",
             "Flute",
             "Watermelon",
             "Trumpet"
        ],
        correctAnswer: 3
    },
    {
        question: "I am an instrument. I am usually seen with 6 strings. Who am I?",
        answer: [
             "Cello",
             "Harmonica",
             "Trombone",
             "Guitar"
        ],
        correctAnswer: 3
    },
    {
        question: "What type of chord do the notes CEG make up?",
        answer: [
             "Major",
             "Minor",
             "Diminished",
             "Augmented"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the notation for musicians called?",
        answer: [
             "Notty Notation",
             "Word  Notation",
             "Staff Notation",
             "Grescham Notation"
        ],
        correctAnswer: 2
    },
    {
        question: "What does legato mean?",
        answer: [
             "Swiftly and well connected",
             "Smooth and well connected",
             "Aggressive and Jagged",
             "Soft and Jagged"
        ],
        correctAnswer: 1 
    },
    {
        question: "How many notes are there in an octave?",
        answer: [
             "7",
             "13",
             "8",
             "12"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the word describing speed in music?",
        answer: [
             "Adante",
             "Mojuine",
             "Tempo",
             "Pronjunto"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the interval between C and G?",
        answer: [
             "Perfect 3rd",
             "Perfect 4th",
             "Perfect 5th",
             "Perfect 6th"
        ],
        correctAnswer: 2
    }
    
    ]
populate()

let questionHeader = qstCon.querySelector("h2")
let questionTitle = qstCon.querySelector("p")
let allBtn = qstCon.querySelectorAll("button")
questionHeader.textContent = "Question " + parseInt(questionNum + 1)
questionTitle.textContent = allQuestions[questionNum].question
let correct = allQuestions[questionNum].correctAnswer
for (let i = 0; i < allBtn.length; i++){
    if (i === correct){
        allBtn[i].value = "True"
    }
    else {
        allBtn[i].value = "False"
    }
    allBtn[i].innerText = allQuestions[questionNum].answer[i]
}



function getAnswer(e) {
    console.log(e.target.value)
    if(e.target.value === "True" ){
        score +=10
        console.log("Correct")
        console.log(score)

        
    } 
    else {
        console.log("Incorrect")
    }

    questionNum++
    populate()

}

