const quiz= [   
    { 
      Question : "Q1: Which animal lays eggs?",
      n:"Question 1 0f 10",
      a : "Dog",
      b : "Cat",
      c : "Duck",
      d : "Sheep",
      ans:"ans3"
    },

    { 
        Question :  "Q2: A male cow is called?",
        n:"Question 2 0f 10",
        a : "Ox",
        b : "Dog",
        c : "Sheep",
        d : "Monkey",
        ans :"ans1"
    },
    { 
        Question :  "Q3:  Which one is a fur-bearing animal?",
        n:"Question 3 0f 10",
        a : "Hens",
        b : "crocodile",
        c : "Tortories",
        d : "cat",
        ans :"ans4"
    },
    { 
        Question :  "Q4: What is Earth’s only natural satellite?",
        n:"Question 4 0f 10",
        a : "Sun",
        b : "Mars",
        c : "Venus",
        d : "Moon",
        ans :"ans4"
    },
    { 
        Question :  "Q5:  What part of the body helps you move?",
        n:"Question 5 0f 10",
        a : "Eyes",
        b : "Lungs",
        c : "Pancreas",
        d : "Muscles",
        ans :"ans4"
    },
    { 
        Question :  "Q6: The two holes of the nose are called?",
        n:"Question 6 0f 10",
        a : "Eyelids",
        b : "Nostrils",
        c : "Nails",
        d : "Hairs",
        ans :"ans2"
    },
    { 
        Question :  "Q7: What star shines in the day and provides light?",
        n:"Question 7 0f 10",
        a : "Moon",
        b : "Venus",
        c : "sun",
        d : "Mars",
        ans :"ans3"
    },
    { 
        Question :  "Q8:  Which organ covers the entire body and protects it?",
        n:"Question 8 0f 10",
        a : "Liver",
        b : "Heart",
        c : "Skin",
        d : "Brain",
        ans :"ans3"
    },
    { 
        Question :  "Q9:  Which shape is a round?",
        n:"Question 9 0f 10",
        a : "RECANTLE",
        b : "CIRCLE",
        c : "RHOMBUS",
        d : "SQUARE",
        ans :"ans2"
    },
    { 
        Question :  "Q10:  What is the young one of a cow called?",
        n:"Question 10 0f 10",
        a : "Puppy",
        b : "kitten",
        c : "calf",
        d : "Baby",
        ans :"ans3"
    } 
];
const question = document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit= document.querySelector('#submit');
const progress =document.querySelector('#progress')

const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');
const Next = document.querySelector('#next');
const Previous = document.querySelector('#previous');

let questionCount =0;
let score =0;
const loadQuestion = () => {
    const questionlist=quiz[questionCount];
    question.innerText=questionlist.Question;
    progress.innerHTML=questionlist.n;
                                            
    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}
 loadQuestion();
 

 const GetcheckAns = () =>{
    let answer;
    answers.forEach((currelemt) =>{
        if(currelemt.checked){
            answer = currelemt.id;
        }
    });
    return answer;
 }
 
 const deselectall = () =>{
    answers.forEach((currelemt) => currelemt.checked=false);
 }

 Next.addEventListener('click',() =>{
    questionCount++;
    deselectall();
    if(questionCount < quiz.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML=`<h3> you Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick ="location.reload()"> Play Again ✌</button>`;
        showscore.classList.remove('socrearea');
    }
 })
 Previous.addEventListener('click',() =>{
    questionCount--;
    // deselectall();
    if(questionCount >= 0){
        loadQuestion();
    }
    
 })
 submit.addEventListener('click' ,() =>{
    const checkedAns= GetcheckAns();
    console.log(checkedAns);

    if(checkedAns === quiz[questionCount].ans){
        score++;
    };  
    questionCount++;
    deselectall();
    {
        showscore.innerHTML=`<h3> you Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick ="location.reload()"> Play Again ✌</button>`;
        showscore.classList.remove('socrearea');
        clearInterval(myt);
    }
 });

  const quiztimeinMin=10;
  let time=quiztimeinMin*60;
   let counting = document.getElementById('countdown');
   let stopinterval=document.getElementById('submit')

 const myt= setInterval(updateCountdown,1000);

  function updateCountdown(){

    const minute=Math.floor(time/60);
    let seconds = time % 60;
    counting.innerHTML=`${minute}: ${seconds}`;
    time--;
    if(time<0){
        clearInterval(myt);
        counting.style.innerHTML='00:00';
        submit.click();
        showscore.innerHTML=`<h3> you Scored ${score}/${quiz.length}</h3>
        <button class="btn" onclick ="location.reload()"> Play Again ✌</button>`;
        showscore.classList.remove('socrearea');
    }
    } 
     