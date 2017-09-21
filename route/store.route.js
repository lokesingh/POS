// it is a part of store.

var express = require('express');
var router = express.Router();
var store_modal = require('../Modal/store.model');



//get the User class value
router.get('/store_get_value', (req, res, next) => {
    store_modal.find(function(err,  store_modal) {
        res.json( store_modal);
    })

});

// get the single value 
router.get('/store__single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    store_modal.findOne(({_id: id}),function(err,StoreDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'StoreDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, StoreDetail,message:'StoreDetail single datail found'}); 
            console.log( res.json);
        }
    })
})
//apply the post mehtod 
//save the class value
router.post('/store_post_value', (req, res, next) => {
    const newClass = store_modal({
        storeName: req.body.storeName,
        storeEmail: req.body.storeEmail,
        storePhone: req.body.storePhone,
        storecountry: req.body.storecountry,
        storeCity: req.body.storeCity,
        storeAddress: req.body.storeAddress,
        storeReceipt: req.body.storeReceipt,

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
router.delete('/store_delet/:id', (req, res, next) => {
    store_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
// apply update request
router.put('/store_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    store_modal.findById(id, function(err, StoreUpdate) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            StoreUpdate.update(req.body, function(err, success) {
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