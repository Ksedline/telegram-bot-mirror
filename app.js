const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const {
  PORT = 3000
} = process.env

app.use('/', require('./routes/index'))

app.listen(PORT, console.log('Listening'))
