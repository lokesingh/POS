var express = require('express');
var router = express.Router();
var collection_store_modal = require('../Modal/collection.store.model');

//get the User class value
router.get('/collection_store_get_value', (req, res, next) => {
    collection_store_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })
});

// get the single value 
router.get('/collection_store_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    collection_store_modal.findOne(({_id: id}),function(err,collection_store){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'collection_store single  Detail not found'}); 
        } else {
            res.json( {success:true,collection_store,message:'collection_store datail found'}); 
            console.log( res.json);
        }
    })
})    

//apply the post mehtod 
//save the class value
router.post('/catego_expesne_post_value', (req, res, next) => {
    const newClass = collection_store_modal({
        collection_store: req.body.collection_store,
        collection_quantity: req.body.collection_quantity,
        collection_price: req.body.collection_price,
        collection_warehouse: req.body.collection_warehouse,
        collection_warehouse_quantity: req.body.collection_warehouse_quantity,
        collection_warehouse_amount: req.body.collection_warehouse_amount
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
router.delete('/collection_store_delet/:id', (req, res, next) => {
    collection_store_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
//update the and apply update request
router.put('/collection_store_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    collection_store_modal.findById(id, function(err, collection_store) {
        if (err) {
            res.json({ success: false, message: 'collection_store not found' });
        } else {
            collection_store.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'collection_store modal update successfully' });
                }
            });
        }
    })    
});

});
module.exports = router;