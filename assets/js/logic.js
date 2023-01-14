let startBtn = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let questionsScreen = document.querySelector("#questions");
let endScreen = document.querySelector("#end-screen");
let feedbackMsg = document.querySelector("#feedback");
let timer = document.querySelector("#time");
let scoresPage = document.querySelector(".scores");

// WHEN START BTN IS CLICKED START TIMER AND PRESENT FIRST QUESTION
function startGame() {
    // When the start quiz btn is clicked HIDE the ID START-SCREEN
    startScreen.setAttribute("class", "hide");

    // and SHOW the ID QUESTIONS 
    questionsScreen.setAttribute("class", "start");
    questionsScreen.children[0].textContent = "My Questions";

    // and START the timer
    let timeLeft = 76;
    let timeCountdown = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
        if (timer > 0) {
            // Loop through the questions
            for (let i = 0; i < myQuestions.length; i++) {
                console.log(myQuestions[i]);
            }
        } else {
            clearInterval(timeCountdown);
        }

    }, 1000)
    // If question is correct
    // Don't alter timer
    // Display feedback CORRECT
    // else if question is incorrect
    // Take 15seconds - from timer
    // Display feedback INCORRECT
}



// WHEN FIRST QUESTION IS ANSWERED I AM PRESENTED WITH ANOTHER QUESTION
// IF QUESTION IS NOT CORRECT
// *AMOUNT* OF TIME IS SUBTRACTED FROM TIMER

// WHEN ALL QUESTIONS ARE ANSWERD OR THE TIMER HAS REACHES 0
// GAME IS OVER

// WHEN THE GAME IS OVER
// I CAN SAVE MY NAME AND THE SCORE

startBtn.addEventListener("click", startGame);