var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

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
app.use('/api', require('./routes/api'))

//Database
mongoose.connect("mongodb+srv://urbanshades:onlyme2705@urbanshades.6jmof.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log("ERROR: ", err)
  return console.log("Connected to DataBase successfully..")
})



app.listen(5000, (err) => {
  if (err) console.log("ERROR: ", err)
  console.log("Server has started...")
})

module.exports = app;
