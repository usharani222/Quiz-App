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
    question: "Wanna Say some thing",
    answers: [
        {text:"Ily",correct:false},
        {text:"Ihy",correct:true},
        {text:"UrmyL",correct:false},
        {text:"UrmyW",correct:false},
    ]
   }
];


//cursor code start
let mouseX=0,mouseY=0;
let cursorX=0,cursorY=0;
const cursor=document.getElementById("cursor");
const inner=document.getElementById("inner");
document.addEventListener("mousemove",(e)=>{
    mouseX=e.pageX;
    mouseY=e.pageY;
});
function animate(){
    cursorX+=(mouseX-cursorX)*0.1;
    cursorY+=(mouseY-cursorY)*0.1;

    cursor.style.left=cursorX+"px";
    cursor.style.top=cursorY+"px";
    requestAnimationFrame(animate);
} 

animate();

document.addEventListener('mouseover',(e)=>{
    if(e.target.tagName==="BUTTON")
    {
        cursor.style.height="45px";
        cursor.style.width="45px";
        inner.style.height="20px";
        inner.style.width="20px";
    }
});

document.addEventListener('mouseout',(e)=>{
    if(e.target.tagName==="BUTTON")
    {
        cursor.style.height="40px";
        cursor.style.width="40px";
        inner.style.height="0px";
        inner.style.width="0px";
    }
});

//cursor script end

const questionElement=document.getElementById("question");
const ansElement=document.getElementById("answers");
const nextbtn=document.getElementById("next");
let i=0;
let score=0;
// console.log(nextbtn);
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
        // console.log(button.tagName);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct;
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

function selected(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct==="true";
    // console.log(iscorrect);
    // console.log(selectbtn.dataset.correct);
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }
    else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(ansElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
}

function showscore(){
    resetstate();
    questionElement.innerText=`Your score is ${score} out of ${questions.length}`;
    nextbtn.style.display="block";
    nextbtn.innerText="Play Again";
}

function handlequestion(){
    i++;
    if(i<questions.length)
        showquestion();
    else{
        showscore();
    }
}

nextbtn.addEventListener("click",()=>{
    if(i<questions.length)
    {
        handlequestion();
    }
    else{
        startquiz();
    }
})
startquiz();