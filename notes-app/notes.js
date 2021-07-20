const fs = require('fs')
const chalk = require('chalk')

// Get all the notes
//*stander version*/
// const getNotes = function(){
//      note_json = fs.readFileSync('notes_data.json').toString()
//     if ( note != undefined){
//         note_data = JSON.parse(note_json)

//     }else{
//         console.log("Eror happened while adding new note..")
//     }
//     return note_data
// }

const getNotes = () => {
    note_json = fs.readFileSync('notes_data.json').toString()
    if (note != undefined) {
        note_data = JSON.parse(note_json)

    } else {
        console.log("Eror happened while adding new note..")
    }
    return note_data
}

// Add note
//*stander version*/
// const addNotes = function (title, body) {
// const notes = loadNotes()
// const dup = notes.filter(function (note) {
//     return note.title == title
// })

// if (dup.length == 0) {

//     notes.push({
//         title: title,
//         body: body
//     })

//     saveNote(notes)
//     console.log(chalk.green.inverse("Saved note succesfully"))
// } else {
//     console.log(chalk.red.inverse('Error duplicate titles'))
// }

// }

const addNotes = (title, body) => {
    const notes = loadNotes()
    const dup = notes.find((note) => note.title == title)

    // debugger

    if (dup === undefined) {

        notes.push({
            title: title,
            body: body
        })

        saveNote(notes)
        console.log(chalk.green.inverse("Saved note succesfully"))
    } else {
        console.log(chalk.red.inverse('Error duplicate titles'))
    }
}

// Save a note
//*stander version*/
// const saveNote = function (notes) {
//     fs.writeFileSync('notes_data.json', JSON.stringify(notes))
// }

const saveNote = (notes)=> {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes))
}


// Load all notes
const loadNotes = () => {

    try {
        return JSON.parse(fs.readFileSync('notes_data.json').toString())
    } catch (error) {
        return []
    }
}

const listAllNotes =  () => {
    const notes = loadNotes();
    if (notes.length == 0) {
        console.log(chalk.red("there no notes to display it.. :("))
    } else {
        console.log(chalk.green("Printing all notes:\n " + JSON.stringify(notes)))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse("Removed succesfully"))
        saveNote(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No note found"))
    }


}

const readNote = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((note) => note.title === title)
    if (!notesToRead) {
        console.log(chalk.red.inverse("No note found"))
    } else {
        console.log(chalk.gray.inverse( title ))
        console.log(chalk.green(notesToRead.body))      
    }


}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listAllNotes: listAllNotes,
    readNote:readNote
}