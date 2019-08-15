import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track index = 0;
    @track score = 0;
    @track showResults = false;
    all_questions = [
        {
            id: 1,
            question_string: 'Which variable is modified in-place, or both?',
            codepenId: 'eb5s41cp',
            choices: {
                correct: 'both',
                all: ['x', 'y', 'both']
            }
        },
        {
            id: 2,
            question_string: 'Which function can be called without error?',
            codepenId: 'pr21uw0n',
            choices: {
                correct: 'hello',
                all: ['hello2', 'hello', 'both']
            }
        },
        {
            id: 3,
            question_string: 'How many wheels are there on a tricycle?',
            codepenId: 'eb5s41cp',
            choices: {
                correct: 'Three',
                all: ['One', 'Two', 'Three', 'Four']
            }
        }
    ];
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
        this.showResults = true;
    }
    resetQuiz() {
        this.score = 0;
        this.index = 0;
        this.showResults = false;
        // reset all questions to hide code snippet results
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
        // TODO: get the right answer here, or in question component
        const questionElem = this.template.querySelector('my-question');
        if (questionElem) {
            const [submittedAnswer, correctAnswer] = questionElem.getAnswer();
            if (submittedAnswer === correctAnswer) {
                this.score += 1;
            }
            questionElem.showCodeSnippetResult();
            this.toggleSubmitButton();
        }
    }
}
