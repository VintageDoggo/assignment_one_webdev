/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: index.js
  Date: 09/28/2022
*/
/* File to render the different routes of the site*/
let express = require('express');
let router = express.Router();

let indexController = require("../controllers/index")

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET home page - case 2 */
router.get('/', indexController.displayHomePage);

/* GET About Me page. */
router.get('/about', indexController.displayAboutPage);

/* GET Contact Me page. */
router.get('/contact', indexController.displayContactPage);

/* GET My Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Display Login page */
router.get('/login', indexController.displayLoginPage);

/*POST Process Login page */
router.post('/login', indexController.processLoginPage);

module.exports = router;
