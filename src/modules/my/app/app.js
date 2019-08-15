import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    all_questions = [
        {
            question_string: 'What color is the sky?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Blue',
                all: ['Pink', 'Orange', 'Blue', 'Green']
            }
        },
        {
            question_string: 'Which season is the hottest?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Summer',
                all: ['Winter', 'Autumn', 'Spring', 'Summer']
            }
        },
        {
            question_string: 'How many wheels are there on a tricycle?',
            codepenId: 'rNBeOwV',
            choices: {
                correct: 'Three',
                all: ['One', 'Two', 'Three', 'Four']
            }
        },
        {
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
}
