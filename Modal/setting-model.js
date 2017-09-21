'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var setting_Schema = new Schema({
    companyName: { type: String },
    companyLogo: { type: String },
    companyPhone: { type: String },
    companyCode: { type: String },
    companyDiscount: { type: String },
    CGST: { type: String },
    SGST: { type: String },
    IGST: { type: String },
    companyNumberDecimal: { type: String },
    companyTimer:{ type: String },
    companyHeaderParagraph: { type: String },
    companyFooterParagraph: { type: String },
    compnayStripeSecretkey: { type: String },
    compnayStripePublishedKey: { type: String },

});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_setting', setting_Schema);
