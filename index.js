const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const _ = require('lodash')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/business',function(req,res){
  res.sendFile(path.join(__dirname, 'businessForm.html'))
});

app.get('/community',function(req,res){
  res.sendFile(path.join(__dirname, 'communityForm.html'))
});


app.post('/submit', function(req, res, next){
  res.send("hello")
})


app.listen(3000)
