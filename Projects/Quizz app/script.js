const questions = [
    {
      question: "What is the capital of France?",
      options: [
        { text:"Shark", correct:false},
        { text:"Blue whale" , correct:true},
        { text:"Elephante" , correct:false},
        { text:"Giraffe" , correct:false},
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      options: [
        { text:"Mars", correct:false},
        { text:"Saturn" , correct:false},
        { text:"Jupiter" , correct:true},
        { text:"Uranus" , correct:false},
      ]
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        { text:"Charles Dickens", correct:false},
        { text:"William Shakespeare" , correct:true},
        { text:"Jane Austen" , correct:false},
        { text:"Emily Bronte" , correct:false},
      ]
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: [
        { text:"Mars", correct:true},
        { text:"Venus" , correct:false},
        { text:"Mercury" , correct:false},
        { text:"Jupiter" , correct:false},
      ]
    }
];

const questionElement=document.querySelector(`#question`);
const nextButton=document.querySelector("#next-btn");
const answerButton=document.querySelector('#answer-buttons');


let currentQuestionIndex=0;
let score=0;



function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+" ."+ currentQuestion.question;

    currentQuestion.options.forEach(option =>{
        const button = document.createElement("button")
        button.innerHTML= option.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if(option.correct){
            button.dataset.correct=option.correct;
           
        }
        button.addEventListener("click", selectAnswer);
        


    })

}

function resetState(){
    nextButton.style.display='none';
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
      }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
  } else {
      selectedBtn.classList.add("wrong");
      // Display the correct answer
      const correctBtn = [...answerButton.querySelectorAll("button")].find(btn => btn.dataset.correct === "true");
      if (correctBtn) {
          correctBtn.classList.add("correct");
      }
  }
  disableOtherOptions(selectedBtn);
  showNextButton();
}
function disableOtherOptions(selectedBtn) {
    const options = answerButton.querySelectorAll("button");
    options.forEach((option) => {
      if (option !== selectedBtn) {
        option.disabled = true;
      }
    });
  }


  function showNextButton() {
    nextButton.style.display = "block";
  }

  function nextQuestion() {
    resetState();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showFinalScore();
    }
  }

  function showFinalScore() {
    questionElement.innerHTML = `Your final score is ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Restart";
    nextButton.addEventListener("click", startQuiz);
  }

  nextButton.addEventListener("click", nextQuestion);
startQuiz()