// it is a part of category expense

var express = require('express');
var router = express.Router();
var catego_expense_modal = require('../Modal/categories-expense-model');
//var dist = require('../../Client/src/index.html')

//get the User class value
router.get('/cate_expense_get_value', (req, res, next) => {
    catego_expense_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/cate_expense_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    catego_expense_modal.findOne(({_id: id}),function(err,CategoryExpenseDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'CategoryExpense single  Detail not found'}); 
        } else {
            res.json( {success:true,CategoryExpenseDetail,message:'CategoryExpensesingle datail found'}); 
            console.log( res.json);
        }
    })
})

//apply the post mehtod 
//save the class value
router.post('/catego_expesne_post_value', (req, res, next) => {
    const newClass = catego_expense_modal({
        category_expernseName: req.body.category_expernseName,
        category_CreateAt: req.body.category_CreateAt

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
router.delete('/catego_expense_delet/:id', (req, res, next) => {
    catego_expense_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
//update the and apply update request
router.put('/catego_expense_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    catego_expense_modal.findById(id, function(err, catego_expense) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            catego_expense.update(req.body, function(err, success) {
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