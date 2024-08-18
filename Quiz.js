const questions = [
    {
        question: "What is a correct syntax to output 'Hello World' in Java ?" , 
        answers : [
            {text: "print (Helllo World);", correct : false},
            {text: "Sysytem.out.println ('Helllo World');", correct : true},
            {text: "echo (Helllo World);", correct : false},
            {text: "console.WriteLine (Helllo World);", correct : false},
        ]
    },
    {
        question: "How do you insert COMMENTS in Java code ?" , 
        answers : [
            {text: "@ This is comment", correct : false},
            {text: "# This is comment ('Helllo World');", correct : false},
            {text: "/* This is comment", correct : false},
            {text: "// This is comment", correct : true},
        ]

    },
    {
        question: "Which data type is used to create a variable that should store text ?" , 
        answers : [
            {text: "String", correct : true},
            {text: "myString('Helllo World');", correct : false},
            {text: "Txt", correct : false},
            {text: "string", correct : false},
        ]
    },
    {
        question: "How do you create a variable with the numeric value 5 ?" , 
        answers : [
            {text: "float X = 5", correct : false},
            {text: "int X = 5", correct : true},
            {text: "x = 5", correct : false},
            {text: "num X = 5", correct : false},
        ]
    },
    {
        question: " Which operator can be used to compare two values ?" , 
        answers : [
            {text: "=", correct : false},
            {text: "<>", correct : false},
            {text: "><", correct : false},
            {text: "==", correct : true},
        ]
    }
];

const questionElement = document. getElementById("question");
const answerButtons = document. getElementById("answer-buttons");
const nextButton = document. getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0 ;
    nextButton.innerHTML = "Next"
    showQuestion();
}

 function showQuestion() {
    resetState();
// question
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;
//answers
    currentQuestion.answers.forEach(answer  => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" ,selectAnswer)
    });
 }


function  resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
    answerButtons.removeChild (answerButtons.firstChild);
    }

}

function selectAnswer (e) {
    const selectedBtn =  e.target;
    const isCorrect =  selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again :)";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}






nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

 startQuiz();
