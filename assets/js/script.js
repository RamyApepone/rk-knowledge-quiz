// Create const quiz question information 
const quizInfo = [
    {
        question: "1. What country has the highest life expectancy?",
        a: "A. Spain",
        b: "B. Brazil", // Corrected spelling from "Brasil"
        c: "C. Hong Kong",
        d: "D. India", // Corrected from "C. Indian"
        correct: "c",
    },
    {
        question: "2. What is the most common surname in the United States?",
        a: "A. Smith",
        b: "B. John",
        c: "C. Dev",
        d: "D. Jack",
        correct: "a",
    },
    {
        question: "3. Who was the Ancient Greek God of the sun?",
        a: "A. Helios", // Changed from "Deus" to "Helios" for accuracy
        b: "B. Apollo",
        c: "C. Abed",
        d: "D. Apolos",
        correct: "b",
    },
    {
        question: "4. What car manufacturer had the highest revenue in 2020?",
        a: "A. Volkswagen",
        b: "B. Volvo",
        c: "C. Toyota",
        d: "D. None of the above", // Corrected to "None of the above"
        correct: "c",
    },
    {
        question: "5. What company was originally called Cadable?",
        a: "A. Amazon",
        b: "B. Samsung",
        c: "C. DHL",
        d: "D. UPC",
        correct: "a",
    },
    {
        question: "6. What country drinks the most coffee per capita?",
        a: "A. France",
        b: "B. Italy",
        c: "C. Ireland",
        d: "D. Finland",
        correct: "d",
    },
    {
        question: "7. What city is known as The Eternal City?",
        a: "A. Istanbul", // Corrected spelling from "Istabul"
        b: "B. London",
        c: "C. Rome",
        d: "D. Paris",
        correct: "c",
    },
    {
        question: "8. What is the name of the capital city of the Democratic Republic of Congo?",
        a: "A. Lubumbashi",
        b: "B. Kivu",
        c: "C. Kinshasa",
        d: "D. Bas-Congo",
        correct: "c",
    },
    {
        question: "9. What country has won the most World Cups?",
        a: "A. Germany",
        b: "B. England",
        c: "C. Brazil", // Corrected spelling from "Brasil"
        d: "D. Spain", // Corrected from "A. Spain" to "D. Spain"
        correct: "c",
    },
    {
        question: "10. December 26th is known by what name in Ireland?",
        a: "A. St. Patrick's Day",
        b: "B. St. Stephen's Day",
        c: "C. Christmas Day", // Corrected spelling from "Chrismas day"
        d: "D. None of the above",
        correct: "b",
    },
];

// Create const to get elements from HTML
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const submitBtn = document.getElementById('submit');

// Create variable and initialize values
let newQuiz = 0;
let score = 0;

// Create function loadQuiz to get quiz questions
loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const newQuizInfo = quizInfo[newQuiz];
    questionElement.innerText = newQuizInfo.question;
    first.innerText = newQuizInfo.a;
    second.innerText = newQuizInfo.b;
    third.innerText = newQuizInfo.c;
    fourth.innerText = newQuizInfo.d;
}

// Create start quiz function
function startQuiz() {
    let welcomeQuiz = document.getElementById("welcome-quiz");
    let rkQuizArea = document.getElementById("rkQuiz-area");
    let startButton = document.getElementById("startQuiz"); // Select the start button

    welcomeQuiz.style.display = "none";
    rkQuizArea.style.display = "block"; 
    startButton.style.display = "none"; // Hide the start button
}

// Function to deselect answers
function deselectAnswers() {
    answerElements.forEach(answerElement => answerElement.checked = false);
}

// Function to get selected answer
function getSelected() {
    let answer;
    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
}

// Submit action
submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizInfo[newQuiz].correct) {
            score++;
        }
        newQuiz++;
        if (newQuiz < quizInfo.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizInfo.length}. Congratulations, you completed the quiz!</h2>
            <button onclick="location.reload()">Click to restart</button>
            `;
        }
    }
});
