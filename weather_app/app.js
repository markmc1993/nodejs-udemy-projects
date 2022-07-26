const { response } = require('express')
const access_key = require('./api_key.json')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast')

// takes in argument that will be the location
const location = process.argv[2]

// run if a location is provided
if (location){
    // do geocode function from utils/geocode.js sending location and storing returned error and object attributes
    geocode(location, (error, { lat, long, location} = {}) =>{
        if (error){
            return console.log(error)
        }
        //do forecast function from utils/forecast.js sending lat and long and storing returned error and forecast_data
        forecast( lat, long, (error, forecast_data) => {
            if (error){
                return console.log(error)
            }
    
    
            console.log(location)
            console.log(forecast_data)
        })
    })
} else {
    console.log('Please provide a location')
}
