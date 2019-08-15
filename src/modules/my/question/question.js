import { LightningElement, api } from 'lwc';

export default class Question extends LightningElement {
    @api question;

    @api submitAnswer() {
        // find the correct answer for the given question
        // const questionID = e.target.parentElement.dataset.id;
        // const question = this.all_questions.find(function(_question) {
        //     return _question.id === parseInt(questionID, 10);
        // });

        // const correctAnswer = question.choices.correct;
        // console.log(correctAnswer);

        // TODO: extract this to a separate function for testability
        const codepen = this.template.querySelector('my-greeting');
        codepen.seeAnswer();
    }
}
