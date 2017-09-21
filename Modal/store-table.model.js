'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// it is used for create a Star Table
var store_Table = new Schema({
   storeTable : {type: String},
   zoneName  : {type: String},
   zonecode :{type: String},
   status : {type: Boolean, default: true}
})

module.exports = mongoose.model('tbl_store_Table',store_Table);
