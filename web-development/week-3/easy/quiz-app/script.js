const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborginis",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

function input(data, questionNumber, optionLetter) {
    const label = document.createElement("label");

    const option = document.createElement("input");
    option.type = "radio";
    option.value = optionLetter;
    option.name = questionNumber;

    label.appendChild(option);
    label.append(" " + data);

    return label;
}


function createCard(data, questionNumber) {
    const card = document.createElement("div");
    card.className = "card";

    const question = document.createElement("h2");
    question.textContent = data.question;
    card.appendChild(question);

    const options = document.createElement("form");
    options.appendChild(input(data.a, questionNumber, 'a'));
    options.appendChild(document.createElement("br"));

    options.appendChild(input(data.b, questionNumber, 'b'));
    options.appendChild(document.createElement("br"));

    options.appendChild(input(data.c, questionNumber, 'c'));
    options.appendChild(document.createElement("br"));

    options.appendChild(input(data.d, questionNumber, 'd'));
    card.appendChild(options);

    return card;
}

let questionNumber = 0;
let score = 0;

window.onload = function () {
    const container = document.getElementsByClassName('container')[0];
    const card = createCard(quizData[questionNumber], questionNumber);
    container.appendChild(card);
    questionNumber++;
};


document.getElementsByClassName('submit-bar')[0].querySelector("button").addEventListener('click', async function(e) {
    e.preventDefault();
    const selected = document.querySelector(`input[name="${questionNumber-1}"]:checked`);
    if(!selected) {
        alert("Select your answer");
        return;
    } else if(selected.value===quizData[questionNumber-1].correct) {
        score++;
    }
    const oldCard = document.querySelector('.card');
    if (oldCard) {
        oldCard.remove();
    }
    if(questionNumber===4) {
        const element = document.getElementsByClassName('submit-bar')[0];
        element.parentNode.removeChild(element);
        const container = document.getElementsByClassName('container')[0];
        const result = document.createElement("h1");
        result.style.textAlign = "center";
        result.style.padding = "30px";
        result.innerHTML = `You scored ${score}/4.`;
        container.appendChild(result);
    } else {
        const container = document.getElementsByClassName('container')[0];
        const card = createCard(quizData[questionNumber], questionNumber);
        container.appendChild(card);
        questionNumber++;
    }
});