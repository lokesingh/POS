var express = require('express');
var router = express.Router();
var store_Table_model = require('../Modal/store-table.model');

//get the Store Table value
router.get('/store_Table_get_value/:id', (req, res, next) => {
    var id = req.params.id;
    store_Table_model.find(({  zonecode: req.params.id }),function(err, store_Table_model) {
        res.json(store_Table_model);
    })

});

// get the single value 
router.get('/store_Table_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    store_Table_model.findOne(({_id: id}),function(err,StoreTableDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'StoreTableDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, StoreTableDetail,message:'StoreTableDetail single datail found'}); 
            console.log( res.json);
        }
    })
})


// apply the delet mehtod
//delete the save value
router.delete('/store_Time_delet/:id', (req, res, next) => {
  store_Table_model.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});

//apply the post mehtod 
//save the STORE Time value
router.post('/store_Time_post_value', (req, res, next) => {
    const newClass = store_Table_model({
        storeTable:req.body.storeTable,
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
router.put('/store_Table_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
   store_Table_model.findById(id, function(err,  store_Table) {
        if (err) {
            res.json({ success: false, message: ' store_Tablenot found' });
        } else {
            store_Table.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: ' store_Table modal update successfully' });
                }
            });
        }
    })
});

module.exports = router;