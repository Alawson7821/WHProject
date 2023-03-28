export const events = [
    {
        title: 'You\'ve contracted the plague!', 
        context: 'The plague of Justian was one of the worst outbreaks of the Black death', 
        question: 'When did the pluage of justinian first appear in Constantinople?', 
        options: [ '541 C.E.', '542 C.E.', '500 C.E.', '603 C.E.'], 
        answer: '542 C.E.',
        correctStatement: 'Nice! You made a speedy recovery and are on the mend',
        incorrectStatement: 'Yikes, you took a turn for the worse and you\'re gonna be ill for weeks.',
        correctBenefit: 5,
        incorrectLoss: -5,
        incorrectEffect: {
            name: 'You\'re recovering from the plague',
            context: '50% less points per question for 30 seconds.',
            time: 30,
            effect: -0.5,
        },
    },
    {
        title: 'There\'s an invasion! Slavs have entered your town', 
        context: 'During ', 
        question: 'When did thirst appear in Constantinople?', 
        options: [ '541 C.E.', '542 C.E.', '603 C.E.'], 
        answer: '542 C.E.',
        correctStatement: 'Nice! You made a speedy recovery and are on the mend',
        incorrectStatement: 'Yikes, you took a turn for the worse and you\'re gonna be ill for weeks.',
        correctBenefit: 5,
        incorrectLoss: -5,
        incorrectEffect: {
            name: 'You\'re recovering from the plague',
            context: '50% less points per question for 30 seconds.',
            time: 30,
            effect: -0.5,
        }
    }
]