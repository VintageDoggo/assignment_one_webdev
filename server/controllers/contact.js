let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a reference to the db schema
let contact = require('../models/contact');

//Wil sort all documents alphateically and return the Query already sorted
module.exports.displayContactTablePage = (req, res, next) => 
contact.find((err,contactList) =>{
    if(err){
        return console.error(err);
    }
    else{
        //renders the contact-list.ejs and passes the object contactList into the ContactList on the ejs
        res.render('business-contacts/table', {title: "Business Contacts", ContactList: contactList});
    }
}).sort('name')

module.exports.displayAddPage = (req, res, next) =>{
    res.render('business-contacts/add', {title: 'Add Contact'})
}

module.exports.processAddPage = (req, res, next) =>{
    let newContact = contact({
        "name": req.body.name,
        "number": req.body.phone,
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
}

module.exports.displayEditPage = (req, res, next) =>{
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
}

module.exports.processEditPage = (req, res, next) =>{
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
}

module.exports.processDeletion = (req,res,next) =>{
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
}