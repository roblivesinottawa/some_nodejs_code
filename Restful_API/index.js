const express = require('express')
import routes from './src/routes/crmRoutes'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()
const PORT = 4000

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://tech-rob:NcS9wQnvGXh6X6jP@cluster0.cgebv.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// set up body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)

// serving static files
app.use(express.static('public'))

app.get('/', (req, res) => { 
    res.send("hello world")
})




app.listen(PORT, () => console.log(`server running on port ${PORT}`))