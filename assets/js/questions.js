// declare variable for an array of objects holding all questions, choices and answers for your quiz
let myQuestions = [
    {
        question: "What color?",
        choices: ["red", "blue", "green"],
        answer: "red"
    },
    {
        question: "What number?",
        choices: ["one", "two", "three"],
        answer: "two"
    },
    {
        question: "What number?",
        choices: ["one", "two", "three"],
        answer: "two"
    }

];

// declare variable to hold index of current question and initialize to 0
let myQuestionsIndex = 0;

function renderQuestions() {
    // declare variable to hold the current object in the myQuestion array
    let currentQuestionsItem = myQuestions[myQuestionsIndex];

    // Create a variable for content of question title
    let questionTitle = questionsScreen.children[0];

    // clear out any old questions in choice div
    let questionChoices = questionsScreen.children[1];
    questionChoices.textContent = "";

    // update question title <h2> with current question
    questionTitle.textContent = currentQuestionsItem.question;

    // loop through the myQuestion array
    for (let i = 0; i < myQuestions.length; i++) {
        // save the objects iteration in a variable
        let choicesList = document.createElement("button");
        questionChoices.appendChild(choicesList);

        // add buttons based on current question
        choicesList.textContent = currentQuestionsItem.choices[i];

        // add click eventListener to choices buttons
        choicesList.addEventListener("click", function (e) {
            // validate each button
            // if btn is not equal to answer
                // return wrong msg
                // decrement time -15
            // else 
                // return correct msg
                // go to next question
        });

        /* IGNORE

        loop through the choices array
        for (let k = 0; k < obj.choices.length; k++) {

            // create a new list of buttons and append each element from choices array
            // let choicesList = document.createElement("button");
            // questionChoices.appendChild(choicesList);

            // // add buttons based on current question
            // choicesList.textContent = currentQuestionsItem.choices[k];
        }

        IGNORE */
    }


}
