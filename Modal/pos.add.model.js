'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var POS_Schema = new Schema({
    PosId  : { type: String },
    customerName: { type: String },
    customerPhone: { type: String },
    customerState: { type: String },
    POSwaiterName: { type: String },
    POSquanity: { type: String },
    POStotalPrize: { type: String },
    date:{type: String},
    checknumber: { type: String },
    creditcardnumber : { type: String },
    creditcardholder: { type: String },
   
});

// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_pos', POS_Schema);