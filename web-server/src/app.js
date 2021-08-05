const path = require("path")
const express = require("express")
const hbs = require('hbs')
 
const app = express()

// Define path for Express config.
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// Setup Handlebars engine and the custom views directory.  
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve 
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Samy'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About page',
        name: 'Samy'
    })
})

app.get('/help', (req, res) => {
    res.render('help',{
        massage: 'if you stuck on something remember that you have google :) ',
        title:'Help page',
        name: 'Samy'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error',{
        errorMassage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('error',{
        errorMassage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})