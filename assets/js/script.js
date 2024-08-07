// create const quiz question inforamtions 
const quizInfo = [
    {
        question: "1.What country has the highest life expenctancy?",
        a: "A.Spain",
        b: "B.Brasil",
        c: "C.Hong Kong",
        d: "C.Indian",
        correct: "c",
    },
    {
        question: "2.What is the most common surname in the united states?",
        a: "A.Smith",
        b: "B.John",
        c: "C.Dev",
        d: "D.Jack",
        correct: "a",
    },
    {
        question: "3.Who was the Ancient Greek God of the sun?",
        a: "A.Deus",
        b: "B.Apollo",
        c: "C.Abed",
        d: "D.Apolos",
        correct: "b",
    },
    {
        question: "4.What Car manufacture had highest revenue in 2020?",
        a: "A.Volkswagen",
        b: "B.Volvo",
        c: "C.Toyota",
        d: "D.None of above",
        correct: "a",
    },
    {
        question: "5.What company was originally called cadable?",
        a: "A.Amazon",
        b: "B.Samsung",
        c: "C.DHL",
        d: "D.UPC",
        correct: "a",
    },
    {
        question: "6.What country drinks most coffee per capita?",
        a: "A.France",
        b: "B.Italy",
        c: "C.Ireland",
        d: "D.Finland",
        correct: "d",
    },
    {
        question: "7.What city is known as The Eternal city?",
        a: "A.Istabul",
        b: "B.London",
        c: "C.Rome",
        d: "D.Paris",
        correct: "c",
    },
    {
        question: "8.What is the name of the capital city of the republic democratic of congo?",
        a: "A.Lubumbashi",
        b: "B.Kivu",
        c: "C.Kinshasa",
        d: "D.Bas-congo",
        correct: "c",
    },
    {
        question: "9.What country has won the most world cups?",
        a: "A.Germany",
        b: "B.England",
        c: "C.Brasil",
        d: "A.Spain",
        correct: "c",
    },
    {
        question: "10.December 26th is Known by what name in Ireland?",
        a: "A.St Patrick's day",
        b: "B.St Stephen's day",
        c: "C.Chrismas day",
        d: "D.None of above",
        correct: "b",
    },
 
 ];

 // create const to get element from html
const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionElement = document.getElementById('question')
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const submitBtn = document.getElementById('submit')

//create variable and the value
let newQuiz = 0
let score = 0

// create function loadquiz to get quiz questions
loadQuiz()

function loadQuiz() {
    deselectAnswers()
    const newQuizInfo = quizInfo[newQuiz]
    questionElement.innerText = newQuizInfo.question
    first.innerText = newQuizInfo.a
    second.innerText = newQuizInfo.b
    third.innerText = newQuizInfo.c
    fourth.innerText = newQuizInfo.d
}

// create start quiz function
function startQuiz() {
    let welcomeQuiz = document.getElementById("welcome-quiz");
    let rkQuizArea = document.getElementById("rkQuiz-area");
  
    welcomeQuiz.style.display = "none";
    rkQuizArea.style.display = "block"; 
  }

// function to checked answer
  function deselectAnswers() {
    answerElements.forEach(answerElement => answerElement.checked = false)
  }

// function to select answer
  function getSelected() {
    let answer
    answerElements.forEach(answerElement => {
        if(answerElement.checked) {
            answer = answerElement.id
        }
    })
    return answer
  }

// submit action
  submitBtn.addEventListener('click',() =>{
    const answer = getSelected()
    if(answer) {
        if(answer === quizInfo[newQuiz].correct) {
            score++
        }
        newQuiz++
        if(newQuiz < quizInfo.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizInfo.length} Congratulation you complete the quiz</h2>
            <button onclick="location.reload()">Click to restart</button>
            `
        }
    }
  })