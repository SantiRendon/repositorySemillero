export class Question{

    constructor(text,choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    correctAnswer(choices){
        return choices === this.answer;
    }
}