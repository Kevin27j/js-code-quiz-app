// START SCREEN & BUTTON
let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
// QUESTIONS DIV
let questionsScreen = document.querySelector("#questions");
// END SCREEN DIV
let endScreen = document.querySelector("#end-screen");
let finalScore = document.querySelector("#final-score");
let userInitials = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");

// FEEDBACK DIV
let feedbackMsg = document.querySelector("#feedback");

// TIMER 
let timer = document.querySelector("#time");

// time to complete quiz
let timeLeft = 76;

// START the timer
// function to keep track of timer
let timeInterval;

// WHEN START BTN IS CLICKED START TIMER AND PRESENT FIRST QUESTION
function startGame() {
    // When the start quiz btn is clicked HIDE the START-SCREEN
    startScreen.setAttribute("class", "hide");

    // SHOW the QUESTIONS 
    questionsScreen.setAttribute("class", "start");

    // start Count Down
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = timeLeft;
        } else {
            timer.textContent = 0;
            endQuiz();
        }
    }, 1000);
    renderQuestions();
}

function saveScore() {
    // check if the user input form is NOT empty
    if (userInitials.value !== "") {

        // create object to store user initials and score
        const newScore = {
            initials: userInitials.value,
            score: finalScore.textContent
        }

        console.log(newScore);

        // retrieve highscorescore from local storage / default to array
        let scoreArr = JSON.parse(localStorage.getItem("highscore") || '[]');

        // push newScore object to highscore array
        scoreArr.push(newScore);
        // Store new object in localStorage as a string
        localStorage.setItem("highscore", JSON.stringify(scoreArr));

        // Go to highscore.html page and print the new score
        window.location.href = "highscores.html"
    }
}

// Event Listener for start Button, when clicked start the game
startBtn.addEventListener("click", startGame);

// Event Listener for Submit Button
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    
    saveScore()
})