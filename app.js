//const validator = require('validator')
const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

//console.log(yargs.argv) // node app.js add --title="Thins to buy" result { _: [ 'add' ], title: 'Thins to buy', '$0': 'app.js' }

yargs.command({
    command:'add',
    describe:'add new note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'list a note',
    handler:function(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true
        }
    },
    handler:function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)