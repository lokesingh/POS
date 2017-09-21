'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var warehouse_Schema = new Schema({
    warehouseName: { type: String },
    warehousePhone: { type: String },
    warehouseEmail: { type: String },
    warehouseAddress: { type: String },
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_WareHouse', warehouse_Schema);