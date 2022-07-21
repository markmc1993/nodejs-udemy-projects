const request = require('postman-request')
const access_key = require('./../api_key.json')

const geocode = (address, callback) => {
    const url = ('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + access_key[1] + '&limit=1')

    request({ url: url, json: true}, (error, response) => {
        if (error){
            callback('Unable to connect to location services')
        } else if(!response.body.features.length){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                lat: response.body.features[0].center[1],
                long: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode