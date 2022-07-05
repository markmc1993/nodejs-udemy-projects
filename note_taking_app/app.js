const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note!')
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read the file',
    handler: function(){
        console.log('Reading the file!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Displays list',
    handler: function(){
        console.log('Displays list')
    }
})


console.log(yargs.argv)