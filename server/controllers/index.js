let express = require('express');
let router = express.Router();


module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'})
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about_me', {title: 'About Me'})
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('my_projects', {title: 'My Projects'})
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', {title: 'Services'})
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact_me', {title: 'Contact Me'})
}