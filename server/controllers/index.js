/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: server.js
  Date: 12/08/2022
*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//enabling JWT
let jwt = require("jsonwebtoken");
let DB = require('../config/db');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home', displayName: req.user ? req.user.displayName: ''})
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('about_me', {title: 'About Me', displayName: req.user ? req.user.displayName: ''})
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('my_projects', {title: 'My Projects', displayName: req.user ? req.user.displayName: ''})
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('services', {title: 'Services', displayName: req.user ? req.user.displayName: ''})
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact_me', {title: 'Contact Me', displayName: req.user ? req.user.displayName: ''})
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
            req.flash('loginMessage', 'Incorrect username or password')
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            //server error?
            if(err){
                return next(err)
            }
            //create a payload based on the user information
            const payload = {
                id: user._id,
                displayName: user.displayName
            };
            //signing the payload just created
            const authToken = jwt.sign(payload, DB.secret, {
                expiresIn: 624800
            });
            /* JSON Response for API
            res.json({success: true, msg:'User logged in succesfully', user: {
                id: user._id,
                displayName: user.displayName
            }, token: authToken});
            */
            return res.redirect('/contact-list');
        });
    })(req,res,next)
}

module.exports.performLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
}