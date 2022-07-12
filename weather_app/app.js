const { response } = require('express')
const request = require('postman-request')
const access_key = require('./api_key.json')

const location = 'Los%20Angeles'

const url = ('http://api.weatherstack.com/current?access_key=' + access_key[0] + '&query='+ location + '&units=m')
console.log(url)

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    }else{
        console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degreees out. It feels like ' + response.body.current.feelslike  + ' degrees out.')  
    }
})


const mapbox_url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/' + location + '.json?access_token=' + access_key[1] + '&limit=1')
console.log(mapbox_url)
request({ url: mapbox_url, json: true }, (error, response) =>{
    if(error){
        console.log('Unable to connect to mapbox!')
    } else if (!response.body.features.length){
        console.log('Unable to find location')
    } else {
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        console.log(lat, long)
    }
    
})