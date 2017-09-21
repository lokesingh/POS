'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var product_Schema = new Schema({
    productType: { type: String },
    productCode: { type: String,unique: true },
    productName: { type: String },
    productCategory: { type: String },
    productSupplier: { type: String },
    productPurchasePrice: { type: String },
    productTax: { type: String },
    productTaxMethod: {type: String},
    productPriceINR: {type: String},
    productUnit: { type: String },
    productAlertQuantity: { type: String },
    productDiscription: { type: String },
    productImage: { type: String },
    productParagraph: { type: String },
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_product', product_Schema);