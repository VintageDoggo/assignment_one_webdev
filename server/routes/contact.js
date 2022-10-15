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
//Wil sort all documents alphateically and return the Query already sorted
router.get('/', (req, res, next) => 
    contact.find((err,contactList) =>{
        if(err){
            return console.error(err);
        }
        else{
            //renders the contact-list.ejs and passes the object contactList into the ContactList on the ejs
            res.render('business-contacts/table', {title: "Business Contacts", ContactList: contactList});
        }
    }).sort('name')
);

/* GET Route for displaying the add Page - CREATE Op*/
router.get('/add', (req, res, next) =>{
    res.render('business-contacts/add', {title: 'Add Contact'})
});
/* POST Route for processing the add Page - CREATE Op*/
router.post('/add', (req, res, next) =>{
    let newContact = contact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });
    //create method adds a new document to the collection
    contact.create(newContact,(err,contact) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //done with add op, redirect to table page
            res.redirect('/contact-list');
        }
    })
});
/* GET Route for displaying the edit Page - UPDATE Op*/
router.get('/edit/:id', (req, res, next) =>{
    //getting the id of the clicked object
    let id = req.params.id;

    contact.findById(id, (err,contactToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('business-contacts/edit', {title: 'Edit Contact', ContactToEdit: contactToEdit})
        }
    })
});
/* POST Route for processing the edit Page - UPDATE Op*/
router.post('/edit/:id', (req, res, next) =>{
    let id = req.params.id;
    let updatedContact = contact({
        "_id":id,
        "name": req.body.name,
        "number": req.body.phone,
        "email": req.body.email
    });
    contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh list
            res.redirect('/contact-list');
        }
    });
});
/* GET Route for processing Deletion - DELETE Op*/
router.get('/delete/:id', (req,res,next) =>{
    let id = req.params.id;

    contact.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            //refresh list
            res.redirect('/contact-list')
        }
    });
});

module.exports = router