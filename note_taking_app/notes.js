const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    }

    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note) => note.title !== title)
    
    if (newNotes.length !== notes.length){
        saveNotes(newNotes)
        console.log(chalk.green.inverse(title + ' Note removed!'))
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const readNotes = (title) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote){
        console.log(chalk.green.inverse(duplicateNote.title))
        console.log(duplicateNote.body)
    } else{
        console.log(chalk.red.inverse('ERROR: note not found'))
    }
}

const listNotes = () => {
    console.log(chalk.bold.blue.inverse('Your notes...'))
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(chalk.white.inverse('Title: ' + note.title))
    })
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}