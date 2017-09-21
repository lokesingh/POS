'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var people_suppliers_Schema = new Schema({
    suppliersName: { type: String },
    suppliersPhone: { type: String },
    suppliersEmail: { type: String },
    supplierDate:  {type: String},
    suppliersStore: { type: String },
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_people_suppliers_Schema', people_suppliers_Schema);