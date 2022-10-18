export class Question{

    constructor(text,choises,answer){
        this.text = text;
        this.choises = choises;
        this.answer = answer;
    }

    correctAnswer(choise){
        return choise === this.answer;
    }
}