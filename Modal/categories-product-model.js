'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var catego_produc_Schema = new Schema({
    categoryproductName: { type: String },
    categoCreateAt:  { type: String },

});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_catego_produc_Schema', catego_produc_Schema);