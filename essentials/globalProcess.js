// console.log(process.pid)
// console.log(process.versions.node)

// console.log(process.argv)

// const [,,firstName, lastName] = process.argv

// console.log(`your name is ${firstName} ${lastName}`)


const grab = flag => {
    let IndexAfterFlag = process.argv.indexOf(flag) + 1
    return process.argv[IndexAfterFlag]
}


const greeting = grab("--greeting")
const user = grab("--user")

console.log(`${greeting} ${user}`)
