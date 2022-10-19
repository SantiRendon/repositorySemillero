export class UI {
    constructor() { }

    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML = text;
    }

    showChoices(choices, callback) {

        const choicesContainer = document.getElementById('choices')
        choicesContainer.innerHTML = "";

        for (let i = 0; i < choices.length; i++) { //! lenght
            const button = document.createElement("button");
            button.innerHTML = choices[i]
            button.className = "button";
            button.addEventListener('click', () => callback(choices[i]));

            choicesContainer.append(button)

        }
    }

    showScore(score) {
        const quizEndHtml = `
        <h1>result</h1>
        <h2>Your score: ${score}</h2>
        `;

        const element = document.getElementById('quiz');
        element.innerHTML = quizEndHtml;
    }

}