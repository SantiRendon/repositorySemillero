import { questions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";
import { UI } from "./models/UI.js"

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        console.log('FIN')
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
            quiz.guess(currentChoice);
            renderPage(quiz, ui)
        });
    }
}



// Inicializacion del aplicativo
function main() {
    const quiz = new Quiz(questions);
    const ui = new UI;

    renderPage(quiz, ui)
}

main();
