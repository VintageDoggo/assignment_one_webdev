var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'ABOUT ME' });
});

/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'CONTACT ME' });
});

/* GET My Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'MY PROJECTS' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'SERVICES' });
});

module.exports = router;
