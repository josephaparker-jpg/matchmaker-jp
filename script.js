// CONSTANTS
const QUIZ_LENGTH = 5

const QUESTIONS = [

{q:"I enjoy trying new foods.", desired:4},
{q:"I like traveling to new places.", desired:5},
{q:"I enjoy quiet nights at home.", desired:3},
{q:"I enjoy watching movies together.", desired:4},
{q:"I like trying new hobbies.", desired:4},

{q:"I prefer planning ahead.", desired:3},
{q:"I enjoy social events.", desired:3},
{q:"I enjoy outdoor activities.", desired:4},
{q:"I enjoy learning new skills.", desired:5},
{q:"I like staying organized.", desired:4},

{q:"I enjoy exercising.", desired:4},
{q:"I enjoy deep conversations.", desired:5},
{q:"I like meeting new people.", desired:3},
{q:"I enjoy working on long-term goals.", desired:5},
{q:"I enjoy teamwork.", desired:4},

{q:"I enjoy humor and joking.", desired:4},
{q:"I like relaxing weekends.", desired:4},
{q:"I enjoy helping others.", desired:5},
{q:"I enjoy creative projects.", desired:4},
{q:"I enjoy learning about the world.", desired:5}

]

let selectedQuestions=[]
let answers=[]
let currentQuestion=0

const quiz=document.getElementById("quiz")
const nextBtn=document.getElementById("nextBtn")
const recap=document.getElementById("recap")
const result=document.getElementById("result")

// RANDOMIZE QUESTIONS
function startQuiz(){

let shuffled=[...QUESTIONS].sort(()=>Math.random()-0.5)

selectedQuestions=shuffled.slice(0,QUIZ_LENGTH)

showQuestion()

}

function showQuestion(){

if(currentQuestion>=QUIZ_LENGTH){
showRecap()
return
}

let q=selectedQuestions[currentQuestion]

quiz.innerHTML=`

<h3>Question ${currentQuestion+1}</h3>

<p>${q.q}</p>

<label><input type="radio" name="answer" value="1">1</label>
<label><input type="radio" name="answer" value="2">2</label>
<label><input type="radio" name="answer" value="3">3</label>
<label><input type="radio" name="answer" value="4">4</label>
<label><input type="radio" name="answer" value="5">5</label>

`

}

function validate(){

let selected=document.querySelector('input[name="answer"]:checked')

if(!selected){
alert("Please select an answer")
return null
}

return parseInt(selected.value)

}

nextBtn.onclick=function(){

let value=validate()

if(value===null) return

answers.push(value)

currentQuestion++

showQuestion()

}

function showRecap(){

quiz.innerHTML=""
nextBtn.style.display="none"

recap.innerHTML="<h2>Your Answers</h2>"

for(let i=0;i<QUIZ_LENGTH;i++){

recap.innerHTML+=`
<p>
Question ${i+1}: ${answers[i]}
</p>
`

}

calculateResult()

}

function calculateResult(){

let differenceTotal=0

for(let i=0;i<QUIZ_LENGTH;i++){

let diff=Math.abs(answers[i]-selectedQuestions[i].desired)

differenceTotal+=diff

}

let score=100-differenceTotal

let message=""

if(score>=95){
message="True Love 💖"
}
else if(score>=85){
message="Potential Friends 🙂"
}
else{
message="Run Away 🚨"
}

result.innerHTML=`

<h2>Compatibility Score: ${score}%</h2>

<p>${message}</p>

`

}

startQuiz()
