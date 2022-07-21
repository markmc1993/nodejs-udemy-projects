const { response } = require('express')
const access_key = require('./api_key.json')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location){
    geocode(location, (error, data) =>{
        if (error){
            return console.log(error)
        }
    
        forecast(data.lat, data.long, (error, forecast_data) => {
            if (error){
                return console.log(error)
            }
    
    
            console.log(data.location)
            console.log(forecast_data)
        })
    })
} else {
    console.log('Please provide a location')
}
