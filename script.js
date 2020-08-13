function message(){
    var x=prompt("What is your name?");
    if(x==null || x.length==0){
        document.getElementById("ID").innerHTML="Feeling shy? No worries!"+"\n"+"Welcome to my quiz app."+ "Select the domain you want to answer the quiz in below.";
    }
    else{
        document.getElementById("ID").innerHTML="Hello "+x+"!"+"Welcome to my quiz app."+ "Select the domain you want to answer the quiz in below.";
    }
    document.getElementById("Container").className="show";    
}

const startButton = document.getElementById('startbt')
const nextButton = document.getElementById('nextbt')
const questionContainerElement = document.getElementById('Qcontainer')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answerbt')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

function startGame(){
    //startButton.classList.add('hide')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
      })
}

function resetState() {
    clearStatusClass(document.body)
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

const questions =[
    {
        question : 'What is the capital of Russia?',
        answers : [
            {text: 'Saint Petersburg', correct: false},
            {text: 'Moscow', correct: true},
            {text: 'Beirut', correct: false},
            {text: 'Vienna', correct: false}
        ],
    question: 'What is 2 + 2?',
    answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
        ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
    }
]



  