const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/style'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://127.0.0.1:27017/contactNetwork') 
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR")
        console.log(err)
    })

app.get('/', (req, res) => {
    res.render('new-contact')
})

app.get('/search', (req, res) => {
    res.render('search')
})

app.post('/new-contact', (req, res) => {
    res.redirect('search')
})

app.listen(3000, () => {
    console.log('SERVER IS LIVE ON PORT 3000')
})