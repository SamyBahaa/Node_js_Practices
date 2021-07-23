setTimeout(() => {
    console.log("2 min later")
}, 2000)

// const names = ["samy","bahaa","saeed"]
// const shortnames = names.filter((name)=>{
//     return name.length <=4
// })

// console.log(shortnames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            longitude: 0,
            latitude: 0

        }
        callback(data)
    }, 2000)
}

geocode("NYC",(value)=>{
    console.log(value)
})


const add = (val1,val2,callback)=>{
    setTimeout(()=>{
         callback(val1+val2)
    },2000)

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})