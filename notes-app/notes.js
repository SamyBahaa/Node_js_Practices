const fs = require ('fs')
const chalk = require ('chalk')

// Get all the notes
const getNotes = function(){
     note_json = fs.readFileSync('notes_data.json').toString()
    if ( note != undefined){
        note_data = JSON.parse(note_json)
        
    }else{
        console.log("Eror happened while adding new note..")
    }
    return note_data
}

// Add note
const addNotes = function(title,body){
    const notes = loadNotes() 
    const dup = notes.filter(function (note){
        return note.title==title
    })


    if (dup.length == 0){

        notes.push({
            title:title,
            body:body
        })
    
        saveNote(notes)
    } else {
        console.log('Error duplicate titles')
    }

}

// Save a note
const saveNote = function(notes){
    fs.writeFileSync('notes_data.json',JSON.stringify(notes))
}

// Load all notes
const loadNotes = function(){

    try {
        return JSON.parse(fs.readFileSync('notes_data.json').toString())
    } catch (error) {
        return []
    }
}


const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse("Removed succesfully"))
        saveNote(notesToKeep)
    } else {
        console.log(chalk.red.inverse("No note found"))
    }
    

}

module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNote:removeNote
}