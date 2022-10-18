import { questions } from "./data/questions.js";
import { Quiz } from "./models/quiz.js";

// Inicializacion del aplicativo

function main() {
    
    const quiz = new Quiz(questions);

    console.log(Quiz)

}

main();
