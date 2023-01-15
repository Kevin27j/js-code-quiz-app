// START SCREEN & BUTTON
let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
// QUESTIONS DIV
let questionsScreen = document.querySelector("#questions");
// END SCREEN DIV
let endScreen = document.querySelector("#end-screen");
// FEEDBACK DIV
let feedbackMsg = document.querySelector("#feedback");
// TIMER 
let timer = document.querySelector("#time");

let timeLeft = 5;


// WHEN START BTN IS CLICKED START TIMER AND PRESENT FIRST QUESTION
function startGame() {
    // When the start quiz btn is clicked HIDE the START-SCREEN
    startScreen.setAttribute("class", "hide");

    // SHOW the QUESTIONS 
    questionsScreen.setAttribute("class", "start");

    // start Count Down
    countDown();
    renderQuestions();

    // If question is correct
    // Don't alter timer
    // Display feedback CORRECT
    // else if question is incorrect
    // Take 15seconds - from timer
    // Display feedback INCORRECT
}

// START the timer
// function to keep track of timer
function countDown(){
    let timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
    
        if (timeLeft === 0){
            clearInterval(timeInterval);
        }
    }, 1000)
    
}




// WHEN FIRST QUESTION IS ANSWERED I AM PRESENTED WITH ANOTHER QUESTION
// IF QUESTION IS NOT CORRECT
// *AMOUNT* OF TIME IS SUBTRACTED FROM TIMER

// WHEN ALL QUESTIONS ARE ANSWERD OR THE TIMER HAS REACHES 0
// GAME IS OVER

// WHEN THE GAME IS OVER
// I CAN SAVE MY NAME AND THE SCORE



startBtn.addEventListener("click", startGame);