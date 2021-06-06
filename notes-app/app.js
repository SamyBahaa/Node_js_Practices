const chalk = require ('chalk')
const { argv, demandOption } = require('yargs')
const yargs = require ('yargs')
const notes = require ('./notes')

// Create add command
yargs.command({
    command: "add",
    description: "Add a new note",
    builder:{
        title:{
            describe: "Note title",
            demandOption:true,
            type:"string"
        },
        body:{
            describe: "Note Body",
            demandOption:true,
            type:"string"
        }
    },
    handler: function(argv){
        console.log("Title: " + argv.title+"\n Body: "+argv.body)
    }
})

// Create remove command
yargs.command({
    command: "remove",
    description: "Remove a note",
    handler: function(){
        console.log("Removeing a note...")
    }
})

// Create list command
yargs.command({
    command: "list",
    description: "list the note",
    handler: function(){
        console.log("Listing a note...")
    }
})

// Create read command
yargs.command({
    command: "read",
    description: "Read a note",
    handler: function(){
        console.log("Reading a note...")
    }
})

yargs.parse()