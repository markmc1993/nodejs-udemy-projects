const request = require('postman-request')
const access_key = require('./api_key.json')

const url = ('http://api.weatherstack.com/current?access_key=' + access_key + '&query=fife')
console.log(url)

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})