import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track index = 0;
    all_questions = [
        {
            id: 1,
            question_string: 'What color is the sky?',
            codepenId: 'eb5s41cp',
            choices: {
                correct: 'Blue',
                all: ['Pink', 'Orange', 'Blue', 'Green']
            }
        },
        {
            id: 2,
            question_string: 'Which season is the hottest?',
            codepenId: 'eb5s41cp',
            choices: {
                correct: 'Summer',
                all: ['Winter', 'Autumn', 'Spring', 'Summer']
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
        },
        {
            id: 4,
            question_string: 'Who is the main character of Harry Potter?',
            codepenId: 'eb5s41cp',
            choices: {
                correct: 'Harry Potter',
                all: [
                    'Harry Potter',
                    'Hermione Granger',
                    'Ron Weasley',
                    'Voldemort'
                ]
            }
        }
    ];

    get currentQuestion() {
        return this.all_questions[this.index];
    }
    get isFirst() {
        return this.index === 0;
    }
    get isLast() {
        return this.index === this.all_questions.length - 1;
    }
    goNext() {
        this.index += 1;
    }
    goPrevious() {
        this.index -= 1;
    } 
    submitAnswer() {
        // TODO: get the right answer here, or in question component
        const questionElem = this.template.querySelector('my-question');
        if (questionElem) questionElem.submitAnswer();
    }
}
