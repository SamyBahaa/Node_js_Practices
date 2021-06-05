const chalk = require ('chalk')
const notes = require ('./notes')


console.log(notes())
console.log(chalk.red.bold.inverse('Error 404!'))