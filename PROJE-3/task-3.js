const questions = [
  {
    question: "Gözlemci etkisi, kuantum mekaniği ve insan psikolojisi arasında nasıl bir ilişki kurar?",
    answers: [
      { text: "Kuantum mekaniğinde gözlemci etkisi, psikolojideki placebo etkisi ile aynıdır.", correct: false },
      { text: "Gözlemci etkisi, insanın bilinçli beklentilerinin doğrudan kuantum sistemini etkileyebileceğini söyler.", correct: false },
      { text: "Gözlemci etkisi, kuantum durumlarının ölçümle çöktüğünü ve psikolojide de beklentilerin sonuçları etkileyebileceğini gösterir.", correct: true },
      { text: "Psikolojide gözlemci etkisi, sadece toplumsal öğrenmeyle ilişkilidir.", correct: false },
    ],
  },
  {
    question: "Termodinamik entropi ile insan psikolojisindeki zaman algısı arasındaki ilişki nasıl açıklanabilir?",
    answers: [
      { text: "Entropi arttıkça, insanların geçmişi hatırlaması daha zor hale gelir.", correct: false },
      { text: "Zamanın oku, termodinamik entropi artışı ile yönlenir ve psikolojide insanlar geçmişi net, geleceği belirsiz algılar.", correct: true },
      { text: "İnsanlar entropiyi bilinçli olarak değiştirebilir ve zaman algısını kontrol edebilir.", correct: false },
      { text: "Entropi ile insan psikolojisi arasında herhangi bir ilişki yoktur.", correct: false },
    ],
  },
  {
    question: "Özel görelilik kuramına göre hareketin zaman algısı üzerindeki etkisi nasıl açıklanır?",
    answers: [
      { text: "Hız arttıkça, zamanın daha yavaş aktığı algılanır ve bu psikolojide yoğun stres anlarında zamanın yavaşlaması ile ilişkilendirilebilir.", correct: true },
      { text: "Özel görelilik yalnızca fiziksel sistemler için geçerlidir, insan algısını etkilemez.", correct: false },
      { text: "Zaman genişlemesi sadece mutlak hareketsizlik durumunda gerçekleşir.", correct: false },
      { text: "İnsan beyni, ışık hızına yaklaştığında zamanın tersine aktığını algılar.", correct: false },
    ],
  },
  {
    question: "Kaos teorisi, insan psikolojisindeki hangi olguyla en iyi bağdaştırılabilir?",
    answers: [
      { text: "Kelebek etkisi – Küçük değişikliklerin büyük olaylara yol açması.", correct: true },
      { text: "Grup düşüncesi – İnsanların çoğunluğa uyması nedeniyle rasyonel kararların bozulması.", correct: false },
      { text: "Halo etkisi – İlk izlenimlerin genel algıyı etkilemesi.", correct: false },
      { text: "Tetikleyici faktör – Önemsiz gibi görünen olayların travmayı aktive etmesi.", correct: false },
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
  score++; // Doğru cevabı verdiğinizde skoru artırın
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
  questionElement.innerHTML = `Puanınız: ${score} / ${questions.length}`;
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
