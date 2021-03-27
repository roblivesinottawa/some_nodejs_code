const path = require("path")
const util = require("util")
const v8 = require("v8")

// util.log(path.basename(__filename))
// util.log(" ^ the name of the current file")

util.log(v8.getHeapStatistics())

// const dirUploads = path.join(__dirname, "www", "files", "uploads")
// console.log(dirUploads)