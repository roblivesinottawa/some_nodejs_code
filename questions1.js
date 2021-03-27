const collectAnswers = require('./lib/collectAnswers')

const questions = [
    "what is your name? ",
    "what would you rather be doing? ",
    "what is your preferred programming language? "
]


const answerEvents = collectAnswers(questions)
answerEvents.on("answer", answer => console.log(`question answered: ${answer}`))

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. ")
    console.log(answers)
    process.exit()
});
