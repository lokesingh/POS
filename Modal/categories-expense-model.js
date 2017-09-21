'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var catego_expense_Schema = new Schema({
    category_expernseName: { type: String },
     category_CreateAt: { type: String },

});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_catego_expense_Schema', catego_expense_Schema);