// process.stdin
// process.stdout.write("hello ")
// process.stdout.write("world \n\n\n")


const questions = [
    "what is your name?",
    "what would you rather be doing?",
    "what is your preferred programming language?"
]

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`)
    process.stdout.write(` > `)

}

ask()

// wire up a listener
const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
   
})


process.on('exit', () => {

    const [name, activity, language] = answers

    console.log(`
    
    thank you for your answers

    go ${activity} ${name} you can write ${language} code later

    `)

})