const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const mongoose = require('mongoose')


const port = 3000

// set up the middleware
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = Promise

const dburl = 'mongodb+srv://tech-rob:NcS9wQnvGXh6X6jP@cluster0.cgebv.mongodb.net/learning_node?retryWrites=true&w=majority'

const Message = mongoose.model('Message', {
    name: String,
    message: String
})


app.get('/messages', (req, res) => {
    Message.find({}, (err, messages) => {
        res.send(messages)
    })
    
})

app.post('/messages', async (req, res) => {
    try {
        const message = new Message(req.body)
        const savedMessage = await message.save()
        
        console.log("saved")
    
        const censored = await Message.findOne({ message: "fuck" })
      
        if (censored)
            await Message.remove({_id: censored.id})
        else
            io.emit('message', req.body)        
        
        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(500)
        return console.error(error)
    } finally {
        console.log('message post called')
    }
})


io.on('connection', (socket) => {
    console.log('a user connected')
})

mongoose.connect(dburl, { useMongoClient: true, useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    console.log('mongo db is connected', err)
})


http.listen(port, () => console.log(`listening on port ${port}`))