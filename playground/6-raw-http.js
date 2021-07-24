const http = require("http")
const url = 'http://api.weatherstack.com/current?access_key=a662381d450be076a630567adc578bfc&query=37.8267,-122.4233'

const request = http.request(url,(response)=>{

    let data = ''

    response.on('data',(chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)

    })
})

request.on('error',(error)=>{
    console.log('An error ' , error)
})
request.end()