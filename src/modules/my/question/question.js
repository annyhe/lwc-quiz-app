import { LightningElement, api } from 'lwc';

export default class Question extends LightningElement {
    @api question;
    @api enableSubmitButton;

    @api showCodeSnippetResult() {
        const codepen = this.template.querySelector('my-greeting');
        codepen.seeAnswer();
    }

    @api getAnswer() {
        const correctAnswer = this.question.choices.correct;

        const radioElems = [...this.template.querySelectorAll('[type=radio]')];
        const selectedRadio = radioElems.find(elem => elem.checked);
        let submittedAnswer = selectedRadio.parentElement.textContent || '';

        return [submittedAnswer, correctAnswer];
    }
}
