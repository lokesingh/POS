// it is a part of people cutomers.

var express = require('express');
var router = express.Router();
var people_customers_modal = require('../Modal/people-customers-model');

//get the User class value
router.get('/people_customer_get_value', (req, res, next) => {
    people_customers_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});
//get the User class value
router.get('/people_customer_object_get_value', (req, res, next) => {
    people_customers_modal.find(function(err, Customer) {
        res.json({success:true,Customer,message:'Customer get value'});
    })

});
// get the single value 
router.get('/people_customer_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    people_customers_modal.findOne(({_id: id}),function(err,CustomerDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'CustomerDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, CustomerDetail,message:'CustomerDetail single datail found'}); 
            console.log( res.json);
        }
    })
})

//apply the post mehtod 
//save the class value
router.post('/people_customer_post_value', (req, res, next) => {
    const newClass = people_customers_modal({
        customerName: req.body.customerName,
        customerPhone: req.body.customerPhone,
        customerEmail: req.body.customerEmail,
        customerState: req.body.customerState,
        customerAddress: req.body.customerAddress,
        customerDiscount: req.body.customerDiscount,
        customerCreatedAt: req.body.customerCreatedAt
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
router.delete('/people_customer_delet/:id', (req, res, next) => {
    people_customers_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});

router.put('/people_customer_update/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    people_customers_modal.findOne(({_id: id}), function(err, collection) {
        if (err) {
            res.json({ success: false, message: 'People Customer not found' });
        } else {
            collection.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, data: 'People Customer update successfully' });
                }
            });
        }
    })
});
module.exports = router;