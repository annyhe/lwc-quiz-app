import { LightningElement, track } from 'lwc';
import allQuestions from '../../../../data/allQuestions.json'
export default class App extends LightningElement {
    @track index = 0;
    @track score = 0;
    @track showQuizResults = false;
    // TODO: move this into a json file, or load it remotely
    all_questions = allQuestions;
    get lowerThanFullScore() {
        return this.score < this.all_questions.length;
    }
    get scoreOutOfTotal() {
        return '' + this.score + '/' + this.all_questions.length;
    }
    get currentQuestion() {
        return this.all_questions[this.index];
    }
    get isFirst() {
        return this.index === 0;
    }
    get isLast() {
        return this.index === this.all_questions.length - 1;
    }
    get displayIndex() {
        return this.index + 1;
    }
    get countTotalQuestions() {
        return this.all_questions.length;
    }
    goNext() {
        this.index += 1;
    }
    goPrevious() {
        this.index -= 1;
    }
    setShowResults() {
        this.showQuizResults = true;
    }
    resetQuiz() {
        this.score = 0;
        this.index = 0;
        this.showQuizResults = false;
        // reset all questions
        this.all_questions.forEach(question => {
            question.answer = undefined;
        });
        // hide code snippet results
        const questionElem = this.template.querySelector('my-question');
        if (questionElem) {
            questionElem.hideResult();
        }
    }
    // need to bind explicitly to this component, instead of to child component
    toggleSubmitButton = enable => {
        const submitButton = this.template.querySelector('.submit-button');
        if (submitButton) {
            submitButton.disabled = !enable;
        }
    };

    submitAnswer() {
        const questionElem = this.template.querySelector('my-question');
        if (questionElem) {
            const [submittedAnswer, correctAnswer] = questionElem.getAnswer();
            // missing answer
            if (this.all_questions[this.index].answer === undefined) {
                if (submittedAnswer === correctAnswer) {
                    this.score += 1;
                }
                this.all_questions[this.index].answer = {
                    submittedAnswer,
                    correctAnswer
                };
            } 
            questionElem.showCodeSnippetResult();
            this.toggleSubmitButton();
        }
    }
}
