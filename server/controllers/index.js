let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

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

module.exports.displayLoginPage = (req, res, next) => {
    if(!req.user){
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        })
    }
    else{
        return res.redirect('/');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err){
            return next(err);
        }
        if(!user){
            req.flash('loginMessage', 'Authentication error')
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if(err){
                return next(err)
            }
            return res.redirect('/contact-list')
        });
    })(req,res,next)
}

/*
module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
*/