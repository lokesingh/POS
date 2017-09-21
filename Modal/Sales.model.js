'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var sales_Schema = new Schema({
    salesNumber: { type: String },
    salesTax: { type: String },
    salesDiscount: { type: String },
    salesTotal: { type: String },
    salesCreatedBy: { type: String },
    salesTotalItem: { type: String },
    salesStatus: { type: String },
    salesDate: { type: Date}
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_sales', sales_Schema);