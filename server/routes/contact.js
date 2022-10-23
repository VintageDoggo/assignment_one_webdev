/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: contact.js
  Date: 10/08/2022
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken')

let passport = require('passport');

//helper function for guard purposes
function requireAuth(req, res, next){
  //check if user is logged in
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  next();
}


let contactController = require("../controllers/contact");

/* GET Route for the Business Contact Page - READ Op*/
router.get('/', contactController.displayContactTablePage);

/* GET Route for displaying the add Page - CREATE Op*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST Route for processing the add Page - CREATE Op*/
router.post('/add', requireAuth, contactController.processAddPage);

/* GET Route for displaying the edit Page - UPDATE Op*/
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST Route for processing the edit Page - UPDATE Op*/
router.post('/edit/:id', requireAuth,  contactController.processEditPage);

/* GET Route for processing Deletion - DELETE Op*/
router.get('/delete/:id', requireAuth, contactController.processDeletion);

module.exports = router