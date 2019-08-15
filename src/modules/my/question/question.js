import { LightningElement, api, track } from 'lwc';

export default class Question extends LightningElement {
    @api _question;
    @api enableSubmitButton;
    @track showAnswer = false;
    @track answer;

    // need to track question index changes. if there's a change, showAnswer = false;
    @api
    get question() {
        return this._question;
    }
    set question(value) {
        this._question = value;
        this.showAnswer = false;
    } 
    
    @api showCodeSnippetResult() {
        const codepen = this.template.querySelector('my-greeting');
        codepen.seeAnswer();
    }

    @api getAnswer() {
        const correctAnswer = this.question.choices.correct;

        const radioElems = [...this.template.querySelectorAll('[type=radio]')];
        const selectedRadio = radioElems.find(elem => elem.checked);
        let submittedAnswer = selectedRadio.parentElement.textContent || '';
        this.showAnswer = true;
        this.answer = submittedAnswer === correctAnswer;
        return [submittedAnswer, correctAnswer];
    }
}
