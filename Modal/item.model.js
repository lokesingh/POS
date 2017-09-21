'use strict '

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product_Schema = new Schema({
    Productname:{ type: String },
    Productprice:{ type: String },
    Productqunatity:{ type: String },
    Producttotal: { type: String },
    IGST:{ type: String },
    CGST:{ type: String },
    SGST:{ type: String },
   
})


var item_Schema = new Schema({
   
    customerName:{ type: String },
    customerState:{type:String},
    orderid:{type: Boolean, default: true},
    Posid:{ type: String },
    WaiterName:{ type: String },
    count: { type: String },
    subtotal:{ type: String },
    checknumber:{type:String},
    date:{type:String},
    creditcardnumber:{type:String},
    creditcardholder:{type:String},
    status:{type: Boolean, default: true},
    
    products :['product_Schema']


});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_item', item_Schema);