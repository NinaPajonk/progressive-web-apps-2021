// PACKAGES 
const express = require('express')
const app = express()
const port = 5000
const path = require('path');
var bodyParser = require('body-parser')

const locations = require('./modules/locations.json')



// parse application
app.use(bodyParser.urlencoded({ extended: true }))
// parse application json
// app.use(bodyParser.json())


  
// Setting views (EJS)

// routing
app.get('/hallo', function (req, res) {
  res.send('Hallo World')
})
 
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// localhost port
app.listen(port, () => console.log(`Running on port ${port}`));