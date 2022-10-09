/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: server.js
  Date: 10/08/2022
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contact model
let contact = require('../models/contact');

/* GET Route for the Business Contact Page - READ Op*/
router.get('/', (req, res, next) => 
    contact.find((err,contactList) =>{
        if(err){
            return console.error(err);
        }
        else{
            //renders the contact-list.ejs and passes the object contactList into the ContactList on the ejs
            res.render('business_contacts', {title: "Business Contacts", ContactList: contactList});
        }
    }).sort('name')
);

module.exports = router