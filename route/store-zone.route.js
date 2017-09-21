var express = require('express');
var router = express.Router();
var store_Zone_model = require('../Modal/store-zone.model');



// this is area for star zone
//get the Store Zone value
router.get('/store_Zone_get_value/:id', (req, res, next) => {
    var id= req.params.id;
    
    store_Zone_model.find(({zonecode:id}),function(err, store_Zone_model) {
        res.json(store_Zone_model);
    })

});

// get the single value 
router.get('/store_Zone_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    var zoneName = req.params.zonename1;
    store_Zone_model.findOne(({zonecode:id}),function(err,StoreZone){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'StoreZone single  Detail not found'}); 
        } else {
            res.json( {success:true, StoreZone,message:'StoreZone single datail found'}); 
            console.log( res.json);
        }
    })
})

// apply the delet mehtod
//delete the save value
router.delete('/store_Zone_delet/:id', (req, res, next) => {
   store_Zone_model.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
   
//apply the post mehtod 
//save the STORE  Zone value
router.post('/store_Zone_post_value', (req, res, next) => {
    
    const newClass = store_Zone_model({
        
        zoneName: req.body.zoneName,
        zonecode: req.body.zonecode,
    })
    newClass.save(function(err, usertDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: usertDetail, message: 'New collection saved' });
        }
    })
});


// apply update request
router.put('/store_Zone_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    store_Zone_model.findById(id, function(err, storeZone) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            storeZone.update(req.body, function(err, success) {
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
