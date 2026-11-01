// 1. Dados das perguntas (30 perguntas)
const originalQuestions = [
  {
    question: "Quantas armas a maki já possui?",
    options: ["8", "7", "6", "5", "4"],
    answer: 2
  },
  {
    question: "Quantas armas o Toji Fushiguro ja utilizou?",
    options: ["8", "7", "6", "5", "4"],
    answer: 3
  },
  {
    question: "Quantas pessoas ja utilizaram a Nuvem Brincalhona?",
    options: ["8", "7", "6", "5", "4"],
    answer: 4
  },
  {
    question: "Quantas armas Nobara, Megumi e Yuji juntos já empunharam?",
    options: ["8", "7", "6", "5", "4"],
    answer: 0
  },
  {
    question: "Quantas vezes o Yudi Itadori Já morreu?",
    options: ["3", "2", "1", "0", "4"],
    answer: 1
  },
  {
    question: "Qual dessas armas Maki nunca usou?",
    options: ["Ossos de dragão", "Nuvem brincalhona", "Lança do céu invertida ", "Naginata"],
    answer: 2
  },
  {
    question: "Com quantas técnicas Yuta terminou a obra?",
    options: ["8", "7", "6", "5", "4"],
    answer: 0
  },
  {
    question: "Quais desses Feiticeiros não tem técnica inata?",
    options: ["Ryu ishigori ", "Miguel", "Kusakabe", "Yuta Okkotsu"],
    answer: 2
  },
  {
    question: "Qual desses tem a expansão de domínio mais refinada?",
    options: ["Megumi", "Dagon", "Jogo", "Portador de Dedo"],
    answer: 1
  },
  {
    question: "Qual técnica tem o maior poder de destruição bruto?",
    options: ["Fúria estelar", "Construção", "Manipulação de luz", "Santuário"],
    answer: 0
  },
  {
    question: "Qual desses aspectos são, na verdade, uma técnica inata?",
    options: ["A eletricidade de Kashimo", "Os seis olhos de Gojo", "A imortalidade de Tengen", "A liberação de energia de Ryu"],
    answer: 3
  },
  {
    question: "Qual dessas técnicas Inatas Só tem um usuario?",
    options: ["Projeção", "Manipulação de Sangue", "Cópia", "10 Sombras"],
    answer: 2
  },
  {
    question: "Qual Não é uma técnica inata?",
    options: ["Ilimitado", "Restrição celestial", "Manipulação de Sangue", "Cópia"],
    answer: 1
  },
  {
    question: "Como os Feiticeiros se curam?",
    options: ["Vão na UPA", "Eles não se machucam", "Utlizam Energia Reversa", "Não se curam"],
    answer: 2
  },
  {
    question: "O que aumenta a força e quantidade das maldições?",
    options: ["elas nãoFicam mais fortes", "A balaçade poder do mundo", "A energia dos feiticeiros", "O medo das pessoas"],
    answer: 1
  },
  {
    question: "O que importa numa disputa de dominio?",
    options: ["A tecnica usada", "Refinamento do Dominio", "Quem espandiu primeiro", "A quantidade de energia do usuario"],
    answer: 1
  },
  {
    question: "Qual dessas informações é real?",
    options: ["A Maki é mais Forte que o Toji", "As Sombras de todos os usuários das 10 sombras são iguais", "O Yudi Itadori é o mais forte de todos", "A energia de um feiticeiro é infinita"],
    answer: 1
  },
  {
    question: "Quem sabe mais artes marciais/estilos de luta??",
    options: ["Satoru Gojo", "Yudi Itadori", "Maki Zenin", "Miguel"],
    answer: 2
  },
  {
    question: "Quem foi o Primeiro Amor da Mai Zenin?",
    options: ["Takada", "Aoi Todo", "Maki Zenin", "Yudi Itadori"],
    answer: 2
  },
  {
    question: "Qual o tipo de mulher do Yudi Itadori?",
    options: ["Baixa com bunda grande", "Alta com bunda grande", "Alta com Peitos grandes", "Baixa com peitos grandes"],
    answer: 1
  },
  {
    question: "Quem é o feiticeiro mais rapido?",
    options: ["Naoya Zenin", "Satoru Gojo", "Naobito Zenin", "Maki Zenin"],
    answer: 1
  },
  {
    question: "O que acontece quando nascem gemeos?",
    options: ["Ambos ficam com o mesmo poder", "Ambos os pais morrem", "Nada acontece", "Eles ficam com o poder reduzido"],
    answer: 3
  },
  {
    question: "Quem é a Rika?",
    options: ["Uma feiticeira", "Um shikigami", "Uma Maldição", "Uma pessoa normal"],
    answer: 1
  },
  {
    question: "O que o protagonista come no primeiro episódio?",
    options: ["Uma Barra de Cereal", "Arroz e Feijão", "Torta de manteiga escocesa ", "Um dedo do Sukuna"],
    answer: 3
  },
  {
    question: "Qual era o objetivo do Kenjaku?",
    options: ["Matar todos os feiticeiros", "Trazer a era de ouro", "Reviver o Sukuna", "Derrotar o Sukuna"],
    answer: 1
  },
  {
    question: "Quem é o Sukuna?",
    options: ["A Maldição Mais forte da história", "Um humano da era Heian conhacido como Rei das Maldições", "Um deus que ajuda o protagonista", "Um shikigami"],
    answer: 1
  },
  {
    question: "Quantas vezes o Satoru Gojo morre?",
    options: ["1 vez", "2 vezes", "3 vezes", "4 vezes"],
    answer: 1
  },
  {
    question: "Qual desses clãs não faz parte dos principais?",
    options: ["Suguru", "satoru", "Kamo", "Zenin"],
    answer: 0
  },
  {
    question: "Qual Aluno é responsavel pelo clube de luta?",
    options: ["Kirara", "Kinji Hakari", "Megumi Fushiguro", "Mai Zenin"],
    answer: 1
  },
  {
    question: "Qual foi o anime que o autor se inspirou para fazer o sistema de poder de Jujutsu Kaisen?",
    options: ["One Piece", "Hunter x Hunter", "Bleach", "Solo Leveling"],
    answer: 1
  }
];

let questions = [];

function shuffleArray(items) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function buildShuffledQuestions() {
  const shuffledQuestions = shuffleArray(originalQuestions);

  return shuffledQuestions.map((question) => {
    const correctOption = question.options[question.answer];
    const shuffledOptions = shuffleArray(question.options);

    return {
      ...question,
      options: shuffledOptions,
      answer: shuffledOptions.indexOf(correctOption)
    };
  });
}

// 2. Elementos do DOM
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionNumberEl = document.getElementById("question-number");
const scoreDisplayEl = document.getElementById("score-display");
const questionTextEl = document.getElementById("question-text");
const optionsContainerEl = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn");

// 3. Variáveis de estado
let currentQuestionIndex = 0;
let score = 0;

// 4. Inicializa o Quiz
function startQuiz() {
  questions = buildShuffledQuestions();
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplayEl.textContent = score;
  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
}

// 5. Exibe a pergunta atual
function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
  
  // Atualiza contador e texto
  questionNumberEl.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionTextEl.textContent = currentQuestion.question;

  // Cria os botões das alternativas
  currentQuestion.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.textContent = optionText;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectOption(button, index));
    optionsContainerEl.appendChild(button);
  });
}

// 6. Reseta o estado antes da próxima pergunta
function resetState() {
  nextBtn.style.display = "none";
  optionsContainerEl.innerHTML = "";
}

// 7. Processa a escolha do usuário
function selectOption(selectedButton, selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const allButtons = optionsContainerEl.querySelectorAll(".option-btn");

  // Desabilita todos os botões para impedir múltiplos cliques
  allButtons.forEach(btn => btn.disabled = true);

  if (selectedIndex === currentQuestion.answer) {
    selectedButton.classList.add("correct");
    score++;
    scoreDisplayEl.textContent = score;
  } else {
    selectedButton.classList.add("wrong");
    // Destaca a resposta correta
    allButtons[currentQuestion.answer].classList.add("correct");
  }

  // Mostra o botão "Próxima Pergunta"
  nextBtn.style.display = "block";
}

// 8. Avança para a próxima pergunta ou encerra o quiz
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// 9. Tela final
function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  finalScoreEl.textContent = `${score} / ${questions.length}`;
}

// 10. Iniciar ou reiniciar o quiz
startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", startQuiz);
