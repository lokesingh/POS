'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var people_waiters_Schema = new Schema({
    waiterName: { type: String },
    waiterPhone: { type: String },
    waiterEmail: { type: String },
    waiterStore: { type: String },
    waiterCreateAt: {type: String}
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_people_waiters_Schema', people_waiters_Schema);