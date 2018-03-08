require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Morgan =require('morgan')

const app = express()

// connect to mongoose
mongoose.connect(process.env.MONGODB_URI)

// Logging info about database
const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose connected successfully')
})
connection.on('error', (err) => {
  console.log('Mongoose Error: ', err)
})

// apply middleware
app.use(bodyParser.json())
// Exposes the Static Javascript HTML and CSS we need to run the app
app.use(express.static(`${__dirname}/client/build`))



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('Application is listening on Port' + PORT)
})
