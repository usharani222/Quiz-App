const questions=[
   {
    question: "What is capital of india?",
    answers: [
        {text:"Mumbai",correct:false},
        {text:"Delhi",correct:true},
        {text:"Goa",correct:false},
        {text:"Vizag",correct:false},
    ]
   },
   {
    question: "What is capital of AP?",
    answers: [
        {text:"Amaravati",correct:true},
        {text:"ongole",correct:false},
        {text:"vzm",correct:false},
        {text:"Vizag",correct:false},
    ]
   },
   {
    question: "What is capital of india?",
    answers: [
        {text:"Mumbai",correct:false},
        {text:"Delhi",correct:true},
        {text:"Goa",correct:false},
        {text:"Vizag",correct:false},
    ]
   }
];
const questionElement=document.getElementById("question");
const ansElement=document.getElementById("answers");
const nextbtn=document.getElementById("next");
let i=0;
let score=0;

function startquiz(){
    i=0;
    score=0;
    nextbtn.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let ques=questions[i];
    questionElement.innerHTML=(i+1)+". "+ques.question;

    ques.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerText=answer.text;
        button.classList.add("btn");
        ansElement.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct="true";
        }else{
            button.dataset.correct="false";
        }
        button.addEventListener("click",selected);
    });
}

function resetstate(){
    nextbtn.style.display="none";
    while(ansElement.firstChild)
    {
        ansElement.removeChild(ansElement.firstChild);
    }
}

// function selected(e){
//     const selectbtn=e.target;
//     const iscorrect=selectbtn.dataset.correct==="true";
//     if(iscorrect){
//         selectbtn.classList.add("correct");
//     }
//     else{
//         selectbtn.classList.add("incorrect");
//     }
// }
startquiz();