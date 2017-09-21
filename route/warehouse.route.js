var express = require('express');
var router = express.Router();
var Warehouse_modal = require('../Modal/warehouse_model');

//get the Warehouse class value
router.get('/Warehouse_get_value', (req, res, next) => {
    Warehouse_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// list of the warehouselist
router.get('/warehouselist',(req,res,next)=> {
    Warehouse_modal.find({},function(err,warehouselist){
        if (err) {
            res.json( {success:false, message:'warehouselist not found'}); 
        }else {
            res.json( {success:true, data:warehouselist}); 
        }
    })
})



// get the single value 
router.get('/warehouse_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    Warehouse_modal.findOne(({_id: id}),function(err,warehouseDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'WareHouse single  Detail not found'}); 
        } else {
            res.json( {success:true, warehouseDetail,message:'warehouse single datail found'}); 
            console.log( res.json);
        }
    })
})


//apply the post mehtod 
//save the class value
router.post('/warehouse_insert_value', (req, res, next) => {
    const newClass = new Warehouse_modal({
        warehouseName: req.body.warehouseName,
        warehousePhone: req.body.warehousePhone,
        warehouseEmail: req.body.warehouseEmail,
        warehouseAddress: req.body.warehouseAddress
    })
    console.log(newClass);
    newClass.save(function(err, warehouseDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: warehouseDetail, message: 'New collection saved' });
            console.log( res.json);
        }
    })
});
// apply the delet mehtod
//delete the save value
router.delete('/warehouse_delet/:id', (req, res, next) => {
    Warehouse_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
          
        }
    });
});
/*router.put('/warehouse/:id', function(req, res){
    var id = req.params._id;
    //console.log(id);
    Warehouse_modal.findById(_id, function(err, item){
        if(err){
          res.json({success: false, message: 'Item not found'});
        }
        else{
            Warehouse_modal.update(req.body ,function(err, success){
                if(err){
                    res.json({success: false, message: err});
                }
                else{
                    res.json({success: true, data: 'Item update successfully'});
                }
            });
        }
    })
});*/

router.put('/warehouse_update/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    Warehouse_modal.findById(id, function(err, Warehouse) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            Warehouse.update(req.body, function(err, success) {
                console.log(req.body);
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'User Detail update successfully' });
                }
            });
        }
    })
});


module.exports = router;