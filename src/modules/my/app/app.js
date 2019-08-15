import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    all_questions = [
        {
            id: 1,
            question_string: 'What color is the sky?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Blue',
                all: ['Pink', 'Orange', 'Blue', 'Green']
            }
        },
        {
            id: 2,
            question_string: 'Which season is the hottest?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Summer',
                all: ['Winter', 'Autumn', 'Spring', 'Summer']
            }
        },
        {
            id: 3,
            question_string: 'How many wheels are there on a tricycle?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Three',
                all: ['One', 'Two', 'Three', 'Four']
            }
        },
        {
            id: 4,
            question_string: 'Who is the main character of Harry Potter?',
            codepenId: 'rNBeOwV',
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

    submitAnswer(e) {
        // find the correct answer for the given question
        // const questionID = e.target.parentElement.dataset.id;
        // const question = this.all_questions.find(function(_question) {
        //     return _question.id === parseInt(questionID, 10);
        // });

        // const correctAnswer = question.choices.correct;
        // console.log(correctAnswer);

        // TODO: extract this to a separate function for testability
        const codepen = e.target.parentElement.getElementsByClassName(
            'codepen'
        )[0];
        codepen.seeAnswer();
    }
}
