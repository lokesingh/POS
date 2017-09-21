var express = require('express');
var router = express.Router();
var expense_modal = require('../Modal/expense.model');

//get the User class value
router.get('/expense_get_value', (req, res, next) => {
    expense_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/expense_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    expense_modal.findOne(({_id: id}),function(err,ExpenseDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'Expense single  Detail not found'}); 
        } else {
            res.json( {success:true, ExpenseDetail,message:'Expense single datail found'}); 
            console.log( res.json);
        }
    })
})



//apply the post mehtod 
//save the class value
router.post('/expense_post_value', (req, res, next) => {
    const newClass = expense_modal({
        expenseDate: req.body.expenseDate,
        expenseReference: req.body.expenseReference,
        expenseCategory: req.body.expenseCategory,
        expenseStore: req.body.expenseStore,
        expenseAmount: req.body.expenseAmount,
        expenseFileImage: req.body.expenseFileImage,
        expenseParagraph: req.body.expenseParagraph,
        expenseCreatedBy: req.body.expenseCreatedBy

    })
    newClass.save(function(err, usertDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: usertDetail, message: 'New collection saved' });
        }
    })
});
// apply the delet mehtod
//delete the save value
router.delete('/expense_delet/:id', (req, res, next) => {
    expense_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
//update the and apply update request
router.put('/expense_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    expense_modal.findById(id, function(err, registration) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            expense_modal.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'catego produc modal update successfully' });
                }
            });
        }
    })
});
module.exports = router;