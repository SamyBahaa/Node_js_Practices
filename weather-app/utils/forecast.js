const request = require("request")

const forecast = (latitude,longitude,callback) =>{
    debugger
    const url_forecast = 'http://api.weatherstack.com/current?access_key=a662381d450be076a630567adc578bfc&query='+latitude+','+longitude
    request({url:url_forecast, json:true},(error , response)=>{
        if(error){
            callback("Unable to connect to the service..!")
        }else if(response.body.error){
            callback("Unable to find the location..!")
        }else{
            callback(undefined,
                response.body.current.weather_descriptions + ","+response.body.current.temperature+" degress out. It feels like "+response.body.current.feelslike+" degress out."
            )
        }
    })
}

module.exports = forecast