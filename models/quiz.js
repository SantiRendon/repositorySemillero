import { Question } from "./question.js";

// Clase para las preguntas y respuestas
export class Quiz {
    questionIndex = 0;
    score = 0;

   
    constructor(questions) {
        this.questions = questions;
    }

    guess(answer) {
        console.log(answer)
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++

            const almacenar = (nom, valor) => { // * almacenar datos en el localstorage 
                localStorage.setItem(nom, valor)
            }
            
            almacenar(`opt ${this.questionIndex + 1}`,true)
            
        }else{
            const almacenar = (nom, valor) => {
                localStorage.setItem(nom, valor)
            }
            almacenar(`opt ${this.questionIndex + 1}`, false)
        }

        this.questionIndex++;

    }
    
    isEnded() {
        return this.questions.length === this.questionIndex;
    }


    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
}