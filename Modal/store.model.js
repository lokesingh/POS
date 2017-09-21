'use strict '

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var store_Schema = new Schema({
    storeName: { type: String },
    storeEmail: { type: String },
    storePhone: { type: String },
    storecountry: { type: String },
    storeCity: { type: String },
    storeAddress: { type: String },
    storeReceipt: { type: String },
});




// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_store', store_Schema);
