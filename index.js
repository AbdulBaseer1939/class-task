var data = [
  {
    question: "What is the capital of France?",
    a: "London",
    b: "Paris",
    c: "Istumbol",
    d: "Islamabad",
    correct: "b",
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Mars",
    b: "Earth",
    c: "Jupiter",
    d: "Saturn",
    correct: "a",
  },
  {
    question: "What is the capital of Italy?",
    a: "Milan",
    b: "Rome",
    c: "Naples",
    d: "Venice",
    correct: "b",
  },
  {
    question: "What is the capital of Spain?",
    a: "Barcelona",
    b: "Valencia",
    c: "Madrid",
    d: "Seville",
    correct: "c",
  },
];

var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionE1 = document.getElementById("question");
var optionA = document.getElementById("optionA");
var optionB = document.getElementById("optionB");
var optionC = document.getElementById("optionC");
var optionD = document.getElementById("optionD");
var submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  var currentQuizData = data[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  optionA.innerText = currentQuizData.a;
  optionB.innerText = currentQuizData.b;
  optionC.innerText = currentQuizData.c;
  optionD.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  var answer = getSelected();

  if (answer) {
    if (answer.toLowerCase() === data[currentQuiz].correct.toLowerCase()) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < data.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> You Answered ${score}/${data.length} Questions Correctly</h2>
      <button onclick="location.reload()" class="btn">Do it Again</button>`;
    }
  }
});
