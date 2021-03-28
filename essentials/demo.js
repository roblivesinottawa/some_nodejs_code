// const lodash = require('lodash')
// console.log(lodash.random(1,10))

const fs = require('fs')


// const data = require('./data.json')
// console.log(data.name)



// fs.readFile('./data.json', 'utf-8', (err, data) => {
//     data = JSON.parse(data)
//     console.log(data.name)
// })


// how to read directories
// fs.readdir('essentials/', (err, data) => {
//     console.log(data)
// })


// how to write to files
const data = {
    name: "Tony Stark",
    hero_name: "Iron Man"
}



fs.writeFile('moredata.json', JSON.stringify(data), (err) => console.log("write finished", err))