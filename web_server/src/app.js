const path = require('path')
const express = require('express')
console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const public_directory_path = path.join(__dirname, '../public')
const views_path = path.join(__dirname, '../templates')

// Setup handlebars engine and view location
app.set('view engine', 'hbs')
app.set('views', views_path)

// Setup static directory to serve
app.use(express.static(public_directory_path))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mark'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Mark'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        help_text: 'You need help? Hah! Loser'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Glenrothes',
        temperature: '13 Degrees'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})