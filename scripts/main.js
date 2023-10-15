

let backendAPI = new TriviaAPI

backendAPI.getEasy(1)

let answerButton = document.querySelectorAll('.answers')
let questionDiv = document.querySelector('.question')
let heading = document.querySelector('h2')



async function getEasyTriv() {
   let triv = await backendAPI.getEasy(1)

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
d         }
      }
}
async function getMediumTriv() {
   let triv = await backendAPI.getMedium(1)

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
            answerButton[i].innerText = answersArr[i]
            answerButton[i].classList.add('correct' , 'medium')
         } else {
            answerButton[i].innerText = answersArr[i]
d         }
      }
}

async function getHardTriv() {
   let triv = await backendAPI.getHard(1)

      const category = triv[0].category
      const question1 = triv[0].question
      const question = decodeHTMLEntities(question1)
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
d         }
      }
}
questionDiv.addEventListener('click' , getEasyTriv )