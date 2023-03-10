// declare variable for an array of objects holding all questions, choices and answers for your quiz
let myQuestions = [
    {
        question: 'How do you write "Hello World" in an alert box?',
        choices: ['alertBox("Hello World")', 'alert("Hello World")', 'modal("Hello World")'],
        answer: 'alert("Hello World")'
    },
    {
        question: 'Which one of the following is correct?',
        choices: ['i =+ 1', 'i = i++1', 'i += 1'],
        answer: 'i += 1'
    },
    {
        question: 'Which array method sorts the elements of an array?',
        choices: ['sort()', 'order()', 'changeOrder(order)'],
        answer: 'sort()'
    },
    {
        question: 'How do you get the DOM element with id in JavaScript?',
        choices: ['window.getElementById(...)', 'page.getElementById(...)', 'document.getElementById(...)'],
        answer: 'document.getElementById(...)'
    }

];

// declare variable to hold index of current question and initialize to 0
let myQuestionsIndex = 0;

function renderQuestions() {
    // declare variable to hold the current object in the myQuestion array
    let currentQuestionsItem = myQuestions[myQuestionsIndex];

    // Create a variable for content of question title
    let questionTitle = questionsScreen.children[0];
    // update question title <h2> with current question
    questionTitle.textContent = currentQuestionsItem.question;

    // clear out any old questions in choice div
    let questionChoices = questionsScreen.children[1];
    questionChoices.textContent = "";

    // loop through the myQuestion array
    for (let i = 0; i < currentQuestionsItem.choices.length; i++) {
        // create button elements for choices 
        // and append to choices
        let choicesList = document.createElement("button");
        questionChoices.appendChild(choicesList);

        // add buttons based on current question
        choicesList.textContent = currentQuestionsItem.choices[i];

        // add click eventListener to choices buttons
        choicesList.addEventListener("click", function (e) {
            // check if the button choice is equal to the answer
            if (choicesList.textContent === currentQuestionsItem.answer) {
                // return correct msg
                feedbackMsg.setAttribute("class", "feedback");
                feedbackMsg.textContent = "Correct!";
            }
            // if btn is not equal to answer
            else {
                // decrement time -15
                timeLeft -= 15;
                // return wrong msg
                feedbackMsg.setAttribute("class", "feedback");
                feedbackMsg.textContent = "Wrong!";
            }

            // go to next question when after button choice is clicked
            if (myQuestionsIndex < myQuestions.length - 1) {
                myQuestionsIndex++;
                renderQuestions();
            } else {
                endQuiz();
            }
        });
    }
}

// declare function to end quiz when 
// end of quiz has been reached 
// or when timeLeft is up
function endQuiz() {
    if (myQuestionsIndex === myQuestions.length - 1 || timeLeft === 0) {
        clearInterval(timeInterval);
    }

    // show final score (time left)
    timer.textContent = timeLeft
    finalScore.textContent = timeLeft;

    // hide question-screen div 
    questionsScreen.setAttribute("class", "hide");
    // and show end-screen div
    endScreen.setAttribute("class", "start");
}
