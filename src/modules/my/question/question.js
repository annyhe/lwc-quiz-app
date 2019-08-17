import { LightningElement, api, track } from 'lwc';

export default class Question extends LightningElement {
    @api _question;
    @api enableSubmitButton;
    @track showAnswer = false;
    @track answeredCorrectly;

    // ensure choices are unique
    get uniqueKey() {
        return parseInt(Math.random() * 1000, 10);
    }

    // disable choices for answered questions
    get unselectedChoices() {
        if (!this.question.answer) return this.question.choices.all;
        const _unselectedChoices = this.question.choices.all.filter(
            choice => choice !== this.question.answer.submittedAnswer
        );

        return _unselectedChoices;
    }

    get isAnswerDefined() {
        return this.question.answer !== undefined;
    }
    
    // need to track question changes. if there's a change, showAnswer = false;
    @api
    get question() {
        return this._question;
    }
    
    set question(value) { 
        this._question = value;
        this.showAnswer = false;
    }
    
    @api hideResult() {
        const codepen = this.template.querySelector('my-code-snippet');
        codepen.hideResult();
    }
    
    @api showCodeSnippetResult() {
        const codepen = this.template.querySelector('my-code-snippet');
        codepen.seeAnswer();
        // TODO: move to separate method: disableRadioButtons()
        [...this.template.querySelectorAll('input[type="radio"]')].forEach(
            radioElem => {
                radioElem.disabled = true;
            }
        );
    }

    @api getAnswer() {
        const correctAnswer = this.question.choices.correct;
        const radioElems = [...this.template.querySelectorAll('[type=radio]')];
        const selectedRadio = radioElems.find(elem => elem.checked);
        let submittedAnswer = selectedRadio.parentElement.textContent || '';
        this.showAnswer = true;
        this.answeredCorrectly = submittedAnswer === correctAnswer;
        return [submittedAnswer, correctAnswer];
    }
}
