const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("how do you like node? ", answer => {
    console.log(`your answer is ${answer}`)
})