let questions = [];
let currentQuestionIndex = 0;
let score = 0;

function addQuestion() {
  let questionText = document.getElementById("question").value;
  let answer = document.getElementById("answer").value;
  if (questionText && answer) {
    questions.push({ question: questionText, answer: answer });
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";
    alert("Soru eklendi!");
  }
}

function startQuiz() {
  if (questions.length === 0) {
    alert("Önce soru ekleyin!");
    return;
  }
  document.getElementById("input-container").classList.add("hidden");
  document.getElementById("quiz-container").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById("quiz-question").innerText =
      questions[currentQuestionIndex].question;
    document.getElementById("quiz-answer").value = "";
  } else {
    alert(`Test bitti! Skorunuz: ${score}/${questions.length}`);
    location.reload();
  }
}

function checkAnswer() {
  let userAnswer = document.getElementById("quiz-answer").value;
  if (
    userAnswer.toLowerCase() ===
    questions[currentQuestionIndex].answer.toLowerCase()
  ) {
    score++;
  }
  currentQuestionIndex++;
  showQuestion();
}
