/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: app.js
  Date: 09/28/2022
*/
/*
  File that instantiates the express wrapper into the app.
*/
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let contactRouter = require('../routes/contact')

let app = express();

//database setup
let mongoose = require('mongoose');
let DB = require('./db');

//point Mongoose to the DB  URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

//confirming connection via event when connecting to DB
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
mongoDB.once('open', ()=> {
  console.log('Connected to MongoDB...');
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contact-list', contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: 'Error'});
});

module.exports = app;
