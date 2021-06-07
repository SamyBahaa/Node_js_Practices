const fs = require ("fs")
// const book ={
//     title:'test 1',
//     author:'Samy'
// }

// const bookjson = JSON.stringify(book)
// fs.writeFileSync("1-json.json",bookjson)

// const data = fs.readFileSync('1-json.json').toString()
// const datajson = JSON.parse(data)
// console.log(datajson)


// const data = JSON.parse(fs.readFileSync('1-json.json').toString())
// data.name = 'Samy'
// data.age = 25
// console.log(data)
// fs.writeFileSync("1-json.json",JSON.stringify(data))

let data = [
    {
        title: "test1",
        body: "this is the body of the test 1"
    },
    {
        title: "test2",
        body: "this is the body of the test 2"
    },
    {
        title: "test3",
        body: "this is the body of the test 3"
    }
]
let removed = data.splice(2, 1)
fs.writeFileSync("1-json.json",JSON.stringify(data))
