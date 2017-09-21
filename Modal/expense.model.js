'use strict '

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var expense_Schema = new Schema({
    expenseDate: { type: String },
    expenseReference: { type: String },
    expenseCategory: { type: String },
    expenseStore: { type: String },
    expenseAmount: { type: String },
    expenseFileImage: { type: String },
    expenseParagraph: { type: String },
    expenseCreatedBy: {type: String}
});



// Expose the model to other object (similar to a 'public' setter).
module.exports = mongoose.model('tbl_expense_Schema', expense_Schema);