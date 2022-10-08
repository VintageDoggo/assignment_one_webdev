/*
  Author: Jorge Corichi Herrejon
  Student ID: 301275725
  File Name: server.js
  Date: 10/08/2022
*/
let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "business_contacts"
});

module.exports = mongoose.Model("Contact", contactModel);