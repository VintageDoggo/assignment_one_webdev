/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: index.js
  Date: 09/28/2022
*/
/* File to render the different routes of the site*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page - case 2 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about_me', { title: 'About Me' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact_me', { title: 'Contact Me' });
});

/* GET My Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('my_projects', { title: 'My Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
