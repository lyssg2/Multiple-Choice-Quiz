// Start Button Variable
let start = document.querySelector("#start")
let startButton = document.getElementById("start-button")

// Instructions variable
let instructions = document.querySelector("#instructions")
let answerCheck = document.querySelector("#showAnswer")
let quiz = document.getElementById("quiz")
let questionEl = document.getElementById("questions");
let check = document.getElementById("showAnswer")

// User choices variables

let choiceA = document.getElementById("a");
let choiceB = document.getElementById("b");
let choiceC = document.getElementById("c");
let choiceD = document.getElementById("d");

// Results and score variables

const h1 = document.querySelector('h1')
let result = document.getElementById("resultsBox")
let inputForm = document.createElement("form")
let userInitials = document.createElement("input")
let submit = document.createElement("button")
    // current HS
let highScore = 0
    // HS pushed into local storage
let newScore
    // Current player's new score
let scorePlayer
    // Current High Score player
let highScorePlayer = ''
    // Newest High Scorer
let newHighScorePlayer = ''

// Question and Choices variables 

let questions = [{
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<javascript>',
        b: '<script>',
        c: '<js>',
        d: '<scripting>',
        answer: 'b'
    },
    {
        question: 'Commonly used data types do NOT include',
        a: 'strings',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers',
        answer: 'c'
    },
    {
        question: 'What does CSS stand for?',
        a: 'Catholic Social Services',
        b: 'Correct Style Sheet',
        c: 'Combined System Sheet',
        d: 'Cascading Style Sheet',
        answer: 'd'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'Hyper Text Marketing Language',
        c: 'Hyper Trainer Marking Language',
        d: 'Hyper Text Markup Leveler',
        answer: 'a'
    }
]

// Logs questions and choices 

console.log('question, choices', questions[0].a, b, c, d)

// Variables for playtime

var lastQuestion = questions.length - 1
let runningQuestion = 0
let count = 0
let score = 0
let userAnswer = ''
let secondsLeft = 100
let timer = 0

// Shows question on the page

function showQuestion() {

    let q = questions[runningQuestion]

    console.log(q)

    questionEl.innerHTML = questions[runningQuestion].question
    for (let i = 0; i < questions.length; i++) {
        a.textContent = q.a
        b.textContent = q.b
        c.textContent = q.c
        d.textContent = q.d
    }
}

// Starts quiz on start

start.addEventListener('click', startQuiz)

function startQuiz() {
    container.style.display = "none";
    showQuestion()
    quiz.style.display = "block";
    renderTimer()
    timerbox.style.display = "block"
}

// Submit and form attributes, make it pretty
userInitials.type = "text"
userInitials.placeholder = "Enter your Initials"
userInitials.setAttribute = ('id', 'userIntials')
submit.classList.add("submit-button")
submit.type = "submit"
submit.textContent = "Submit"


// When user selects answer, checks if it is correct/incorrect

choiceA.addEventListener("click", function() {
    userAnswer = 'a'
    checkAnswer()
})
choiceB.addEventListener("click", function() {
    userAnswer = 'b'
    checkAnswer()
})
choiceC.addEventListener("click", function() {
    userAnswer = 'c'
    checkAnswer()
})
choiceD.addEventListener("click", function() {
    userAnswer = 'd'
    checkAnswer()
})

// What happens when answer is right or wrong

function checkAnswer() {
    if (userAnswer === questions[runningQuestion].answer) {
        score++
        answerCorrect()
    } else {
        timeLeft -= 10
        answerWrong()
    }

    // cycles through questions, shows high scores

    if (runningQuestion < lastQuestion) {
        runningQuestion++
        showQuestion()
    } else {
        timerbox.style.display = "none"
        quiz.innerHTML = "<h1>You scored " + score + " point(s)!</h1>"
        quiz.appendChild(inputForm)
        inputForm.appendChild(userInitials)
        inputForm.appendChild(submit)
        return
    }
}

//event listener for the initials submit button
submit.addEventListener("click", recordInitials)

// Tells user if they selected right or wrong

function answerCorrect() {
    check.innerHTML = "Correct!"
}

function answerWrong() {
    check.innerHTML = "Wrong!"
}

function renderTimer() {
    timeLeft = 100
    var showTimer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(showTimer);
            document.getElementById("quiz").innerHTML = "<h1>Time is up. You scored " + score + " point(s).</h1>";
            quiz.appendChild(inputForm)
            inputForm.appendChild(userInitials)
            inputForm.appendChild(submit)
        } else {
            document.getElementById("timerbox").innerHTML = timeLeft + " seconds remaining";
        }
        timeLeft -= 1;
    }, 1000);
}


// Stores highscore 

function setHighScore() {
    highScore = newScore
    highScorePlayer = newHighScorePlayer
    localStorage.setItem("highScore", JSON.stringify(newScore))
    localStorage.setItem("highScorePlayer", JSON.stringify(newHighScorePlayer))
}

function getHighScore() {
    highScore = JSON.parse(localStorage.getItem("highScore"))
    highScorePlayer = JSON.parse(localStorage.getItem("highScorePlayer"))
}

function recordInitials() {
    scorePlayer = userInitials.value
    if (score > highScore) {
        newHighScore = score
        newHighScorePlayer = scorePlayer
    } else {
        newHighScore = highScore
        newHighScorePlayer = highScorePlayer
    }
    setHighScore()
    showScores()
}

function showScores() {
    if (!highScore) {
        quiz.innerHTML = "<h1>No scores submitted</h1>"
        startButton.style.display = 'block'
    } else {
        getHighScore()
        quiz.innerHTML = "<h1>The current high score is " + highScore + " by " + highScoreplayer
        for (let i = 0; i < choices.length; i++) {
            startButton.style.display = 'block'
        }
    }
}

startButton.addEventListener('click', startQuiz)