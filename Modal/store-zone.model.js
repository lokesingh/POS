var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// it is used for create a Star Zone
var store_Zone = new Schema({
    zonecode:{type: String},
    zoneName: {type: String}
});

module.exports = mongoose.model('tbl_storezone', store_Zone);