'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var  collection_Store_Schema = new Schema({
     collection_store: { type: String },
     collection_quantity :  { type: String },
     collection_price: { type: String},
     collection_warehouse:  { type: String },
     collection_warehouse_quantity:  { type: String },
     collection_warehouse_amount:  { type: String }
     

});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_collection_Store',collection_Store_Schema);