const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()


// Define paths for Express config
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')



// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectory))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ecem Karacan'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Ecem Karacan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'This is the HELP page. Please direct me your messages.',
        title : 'Help Page',
        name: 'Ecem Karacan'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Izmir',
        latitude: 29.4521,
        longitude: 45.2136,
        forecast: 'Cloudy. Expecting rain after night.'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        errorMessage: 'Help article not found !!',
        title: '404',
        name: 'Ecem Karacan'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found',
        name: 'Ecem Karacan'
    })
})


app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
