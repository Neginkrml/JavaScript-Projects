const questions = [
  {
    question:
      " Hangi programlama dili, web geliştirmede en yaygın kullanılan dildir?",
    answers: [
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: " C++", correct: false },
      { text: "Java", correct: false },
    ],
  },
  {
    question: " Türkiye'nin başkenti neresidir?",
    answers: [
      { text: "İstanbul", correct: false },
      { text: "İzmir", correct: false },
      { text: "Ankara", correct: true },
      { text: "Antalya", correct: false },
    ],
  },
  {
    question: " Hangi gezegen Güneş Sistemi'ndeki en büyük gezegendir?",
    answers: [
      { text: " Jüpiter", correct: true },
      { text: "Mars", correct: false },
      { text: "Uranüs", correct: false },
      { text: "Venüs", correct: false },
    ],
  },
  {
    question: "Hangi element periyodik tablonun ilk sırasında yer alır?",
    answers: [
      { text: "Oksijen", correct: false },
      { text: "Karbon", correct: false },
      { text: " Azot", correct: false },
      { text: "Hidrojen", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct")
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "block";
}
function handleNextBUtton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBUtton();
  } else {
    startQuiz();
  };
});

startQuiz();
