import { Question } from "./question.js";

// Clase para las preguntas y respuestas
export class Quiz {
    questionIndex = 0;
    score = 0;

    constructor(questions) {
        this.questions = questions;
    }

    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++
        }
        this.questionIndex++;
    }

    isEnded(){
        return this.questions.length === this.questionIndex;
    }


    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
}