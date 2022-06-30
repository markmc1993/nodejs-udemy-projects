const validator = require('validator')
const getNotes = require('./notes.js')

const mynotes = getNotes()

console.log(mynotes)

console.log(validator.isURL('https://github.com/markmc1993'))