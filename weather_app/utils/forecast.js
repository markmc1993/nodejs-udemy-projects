const request = require('postman-request')
const access_key = require('./../api_key.json')

const forecast = (lat, long, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key=' + access_key[0] + '&query='+ lat + ',' + long + '&units=m')
    
    request({ url: url, json: true }, (error, response) => {
        if(error){
            callback('Unable to connect to weather services')
        } else if(response.body.error){
            callback('Unable to find location. Try another search', undefined)
        } else{
            callback(undefined, (response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degreees out. It feels like ' + response.body.current.feelslike  + ' degrees out.'))
        }
    })
}

module.exports = forecast