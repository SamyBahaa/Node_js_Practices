const request = require("request")

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=pk.eyJ1Ijoicy1iYWhhYSIsImEiOiJja3JnZmI1bm8xN2k2Mm9vZWYyaWZ3eDEyIn0.EucRywdhmIIWqB6-6gqDOA&limit=1'
    
    request({ url, json: true }, (error, {body}) => {
        if(error){
            callback("Unable to connect to the service..!")
        }else if(body.features.length == 0){
            callback("Unable to find the location..!")
        }else{
            callback(undefined,{
            latitude  : body.features[0].center[1],
            longitude : body.features[0].center[0],
            location  : body.features[0].place_name,
            })
        }
    })
}
module.exports = geocode