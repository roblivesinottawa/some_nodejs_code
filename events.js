const events = require("events")

const emitter = new events.EventEmitter()

// handle the events
emitter.on("customEvent", (message, user) => {
    console.log(`${user} ${message}`)
})

// emitter.emit("customEvent", "Hello World", "Computer")
process.stdin.on("data", data => {
    const input = data.toString().trim()
    if (input === "exit"){
        emitter.emit("customEvent", "Goodbye", "process")
        process.exit()
    }
    emitter.emit("customEvent", input, "terminal")
})

