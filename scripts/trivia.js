let backendAPI = new TriviaAPI

backendAPI.getEasy(1)

let answerButton = document.querySelectorAll('.popup__button')
let questionDiv = document.querySelector('.popup__question')
let heading = document.querySelector('.popup__header')



async function getEasyTriv() {
   let triv = await backendAPI.getEasy(1)
}
async function getMediumTriv() {
   let triv = await backendAPI.getMedium(1)
}

async function getHardTriv() {
   let triv = await backendAPI.getHard(1)
}
questionDiv.addEventListener('click' , getEasyTriv )







document.querySelector('.player1-name').innerText = prompt('Enter Playe1 Name', 'type here')
document.querySelector('.player2-name').innerText = prompt('Enter Playe2 Name', 'type here')




document.querySelector(".card-easy").addEventListener("click", openEasyQuestion);
const popup = document.querySelector(".popup")
const winPopup = document.querySelector(".winner-popup")
document.querySelector(".popup__exit").addEventListener("click", closeOut);

const easyQ = document.querySelectorAll('.card-easy');
easyQ.forEach((q)=> {
    q.addEventListener('click', openEasyQuestion);
})
const medQ = document.querySelectorAll('.card-medium');
medQ.forEach((q)=> {
    q.addEventListener('click', openMediumQuestion);
})
const hardQ = document.querySelectorAll('.card-hard');
hardQ.forEach((q)=> {
    q.addEventListener('click', openHardQuestion);
})
async function openEasyQuestion(){
    btns.forEach((btn)=>{
        btn.style.backgroundColor="#D39D4B";
    })
    popup.classList.toggle("popup--hidden");
    const triv = await backendAPI.getEasy(1)
    const category = triv[0].category
      const question = triv[0].question
      const answersArr = triv[0].incorrect_answers
      const correctAns = triv[0].correct_answer

      let number = Math.floor(Math.random()*4)
      answersArr.splice(number, 0, correctAns);

      heading.innerHTML = category
      questionDiv.innerHTML = question

      for (let i = 0 ; i< answerButton.length; i++){
         if (answersArr[i] === correctAns) {
            answerButton[i].innerHTML = answersArr[i]
            answerButton[i].classList.add('correct' , 'easy')
         } else {
            answerButton[i].innerHTML = answersArr[i]
            answerButton[i].classList.add('incorrect')
         }
      }
}
async function openMediumQuestion(){
    btns.forEach((btn)=>{
        btn.style.backgroundColor="#D39D4B";
    })
    popup.classList.toggle("popup--hidden");
    const triv = await backendAPI.getMedium(1)
    const category = triv[0].category
    const question =  triv[0].question
    const answersArr = triv[0].incorrect_answers
    const correctAns = triv[0].correct_answer

    let number = Math.floor(Math.random()*4)
    answersArr.splice(number, 0, correctAns);

    heading.innerHTML = category
    questionDiv.innerHTML =   question    

    for (let i =0 ; i<answerButton.length; i++){
       if (answersArr[i]=== correctAns) {
          answerButton[i].innerHTML = answersArr[i]
          answerButton[i].classList.add('correct' , 'medium')
       } else {
          answerButton[i].innerHTML = answersArr[i]
          answerButton[i].classList.add('incorrect')
       }
    }
}
async function openHardQuestion(){
    btns.forEach((btn)=>{
        btn.style.backgroundColor="#D39D4B";
    })
    popup.classList.toggle("popup--hidden");
    const triv = await backendAPI.getHard(1)

      const category = triv[0].category
      const question = triv[0].question
      const answersArr = triv[0].incorrect_answers
      const correctAns = triv[0].correct_answer

      let number = Math.floor(Math.random()*4)
      answersArr.splice(number, 0, correctAns);

      heading.innerHTML = category
      questionDiv.innerHTML = question

      for (let i =0 ; i<answersArr.length; i++){
         if (answersArr[i]=== correctAns) {
            answerButton[i].innerHTML = answersArr[i]
            answerButton[i].classList.add('correct' , 'hard')
         } else {
            answerButton[i].innerHTML = answersArr[i]
            answerButton[i].classList.add('incorrect')
         }
      }
}

async function closeOut(){
    if (scores[0] === 700 || scores[1] === 700) {
        winPopup.classList.toggle("popup--hidden"); 
    } else {
        popup.classList.toggle("popup--hidden"); 
    }
  
}