const request = require("request")

const forecast = (latitude,longitude,callback) =>{
    debugger
    const url = 'http://api.weatherstack.com/current?access_key=a662381d450be076a630567adc578bfc&query='+latitude+','+longitude
    request({url, json:true},(error , {body})=>{
        if(error){
            callback("Unable to connect to the service..!")
        }else if(body.error){
            callback("Unable to find the location..!")
        }else{
            callback(undefined,
                body.current.weather_descriptions + ","+body.current.temperature+" degress out. It feels like "+body.current.feelslike+" degress out."
            )
        }
    })
}

module.exports = forecast