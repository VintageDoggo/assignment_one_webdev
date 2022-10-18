//require modules for the User model
let mongoose = require('mongoose');
let passportLocalMongoose = require("passport-local-mongoose");

let User = mongoose.Schema(
    {
        username: {
            type: String,
            default: "",
            trim: true,
            required: "Username is required"
        },
        //The password is hashed automatically, no need to create schema for this
       /* password: {
            type: String,
            default: "",
            trim: true,
            required: "Password is required"
        },*/
        displayName:{
            type: String,
            default: "",
            trim: true,
            required: "Display Name is required"
        }
    },
    {
        collection: "users"
    }
);
//configure options for the user model
let options = ({missingPasswordError: 'Wrong/Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);