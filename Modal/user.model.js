'use strict '

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var saltrounds = 10;
var path = require('path');
var jwt = require('jsonwebtoken');
var user_Schema = new Schema({
    userName: {type: String, required: true, unique: true},
    userFirstName: { type: String },
    userLastName: { type: String },
    userRole: { type: String },
    userEmail: { type: String, required: true, unique: true },
    userpassword: { type: String },
    useractivityDate: {type: String},
    temporarytoken: {type: String },
    resettoken: { type: String }

});
//password convert in encrypted form
user_Schema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('userpassword')) return next();

    bcrypt.genSalt(saltrounds, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.userpassword, salt, function(err, hash) {
            if (err) return next(err);

            user.userpassword = hash;
            next();
        });
    });
});
user_Schema.methods.comparePassword = function(userpassword) {
    return bcrypt.compareSync(userpassword, this.userpassword);
};
// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_user', user_Schema);