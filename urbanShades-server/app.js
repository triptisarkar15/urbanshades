var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

require('dotenv').config()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

// Routes
app.get('/', (req, res) => {
  res.json({ content: "running" })
})

//Route as middelware
app.use('/api/auth', require('./routes/auth'))
app.use('/api/post', require('./routes/post'))

//Database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log("ERROR: ", err)
  return console.log("Connected to DataBase successfully..")
})


const PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
  if (err) console.log("ERROR: ", err)
  console.log("Server has started...")
})

module.exports = app;
