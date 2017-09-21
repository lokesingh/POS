'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var people_customers_Schema = new Schema({
    customerName: { type: String },
    customerPhone: { type: String },
    customerEmail: { type: String },
    customerState: { type: String },
    customerAddress: { type: String },
    customerDiscount: { type: String },
    customerCreatedAt: { type: String },
});

// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_people_customers_Schema', people_customers_Schema);