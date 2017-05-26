const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const _ = require('lodash')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/submit', function(req, res, next){
  res.send("hello")
})


app.listen(3000)
