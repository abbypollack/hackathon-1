const player1 = document.querySelector(".player0");
const player2 = document.querySelector(".player1");
const btns = document.querySelectorAll(".popup__button");
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let score1 = 0;
let score2 = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("heello");
    console.log(`player${activePlayer}`);
    if (btn.classList.contains("correct")) {
      btn.style.backgroundColor="green";
      if (btn.classList.contains("easy")) {
        currentScore = 100;
      } else if (btn.classList.contains("medium")) {
        currentScore = 200;
      } else if (btn.classList.contains("hard")) {
        currentScore = 300;
      }
      scores[activePlayer] += currentScore;

      btns.forEach((btn) => {
        btn.classList.remove('correct', "medium", "easy","hard");
      });
      document.querySelector(`.player${activePlayer}`).textContent =
        scores[activePlayer];

      if (activePlayer === 0) {
        activePlayer = 1;
      } else {
        activePlayer = 0;
      }
      currentScore = 0;
      btns.forEach((btn) => {
        btn.classList.remove('correct', "medium", "easy","hard");
      });
    } else {
      btns.forEach((btn) => {
        if (btn.classList.contains("correct")) {
          btn.style.backgroundColor="green";
        }
      });
      btn.style.backgroundColor="red";
    
    }
    btns.forEach((btn) => {
      btn.classList.remove('correct', "medium", "easy","hard");
    });
  });
});