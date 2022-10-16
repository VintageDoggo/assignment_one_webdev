/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: server.js
  Date: 10/08/2022
*/
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let contactController = require("../controllers/contact");

/* GET Route for the Business Contact Page - READ Op*/
router.get('/', contactController.displayContactTablePage);

/* GET Route for displaying the add Page - CREATE Op*/
router.get('/add', contactController.displayAddPage);

/* POST Route for processing the add Page - CREATE Op*/
router.post('/add', contactController.processAddPage);

/* GET Route for displaying the edit Page - UPDATE Op*/
router.get('/edit/:id', contactController.displayEditPage);

/* POST Route for processing the edit Page - UPDATE Op*/
router.post('/edit/:id', contactController.processEditPage);

/* GET Route for processing Deletion - DELETE Op*/
router.get('/delete/:id', contactController.processDeletion);

module.exports = router