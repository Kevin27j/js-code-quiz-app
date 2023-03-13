// SCORE PAGE
let scoreList = document.querySelector("#highscores");
let clearList = document.querySelector("#clear");
// console.log(clearList);

function printScore() {
    // Get highscores from localStorage
    let userScore = JSON.parse(localStorage.getItem("highscore"));

    // loop through the highscores array
    for (let i = 0; i < userScore.length; i++) {
        // create new <li> for the highscores and append them to page
        let newList = document.createElement("li");
        scoreList.appendChild(newList);

        newList.textContent = `${userScore[i].initials} - ${userScore[i].score}`
    }
}

// function to clear highscore on click clear button
clearList.addEventListener("click", function(){
    localStorage.clear();
    scoreList.remove();
})

printScore() 

