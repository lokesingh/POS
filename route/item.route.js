//  it is used for contain the value of the 
var express = require('express');
var router = express.Router();
var item_modal = require('../Modal/item.model');
var table = require('../Modal/store-table.model');
// get the single value 
router.get('/item_get_single_value/:id',(req,res,next) => {
    //console.log('before valu id',req.params.id)
    var id = req.params.id;
    item_modal.find(({Posid: id,status:false}),function(err,itemDetail){
        if(err){
           
            res.json( {success:false, message:'itemDetail single  Detail not found'}); 
        } else {
            
                res.json( {success:true, itemDetail,message:'itemDetail single datail found'});
         
        }
    })
})


router.get('/item_single_value/:id',(req,res,next) => {
var id = req.params.id;
item_modal.find(({Posid: id}),function(err,itemDetail){
    if(err){
       
        res.json( {success:false, message:'itemDetail single  Detail not found'}); 
    } else {
        
            res.json( {success:true, itemDetail,message:'itemDetail single datail found'});
     
    }
})
})


// all the get value
router.get('/item', (req, res, next) => {
    item_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});
//apply the post mehtod 
//save the class value
router.post('/item_post_value', (req, res, next) => {
     console.log('req',req.body);
    const newClass =  item_modal({
        Posid:req.body.Posid,
        customerName:req.body.customerName,
        customerState:req.body. customerState,
        WaiterName :req.body.WaiterName,
        products:req.body.products,
        count: req.body.count,
        subtotal:req.body. subtotal,
        date: new Date
        
    })
            
    newClass.save(function(err, ItemDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            if(ItemDetail.Posid){
                id =  ItemDetail.Posid
                table.findOne({_id:id}, function(err, table) {
                    console.log('Table',table)
                    if (err) {
                        res.json({ success: false, message: 'Table Detail not found' });
                    } else {
                        table.update({status:false }, function(err, success) {
                            console.log('Table status',success)

                            if (err) {
                                res.json({ success: false, message: err });
                            } else {
                               // res.json({ success: true, data: ItemDetail, message: 'New collection saved' });
                               ItemDetail.update({status:false }, function(err, success) {
                                console.log('Table status',success)
    
                                if (err) {
                                    res.json({ success: false, message: err });
                                } else {
                                    res.json({ success: true, data: ItemDetail, message: 'New collection saved' });
                                }
                            });
                            }
                        });
                    }
                })
            }   
        }
    })
    //console.log(req);
});


// apply the delet mehtod
//delete the save value
router.delete('/item_delet/:id', (req, res, next) => {
    item_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            
        }
    });
});

//all the value delet value
router.delete('/item_All_delet/:id', (req, res, next) => {
    item_modal.remove({ Posid: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            
        }
    });
});

//update the and apply update request
router.put('/item_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log('response',req.params)
        
    item_modal.findOne({Posid:id,status:false}, function(err, item) {
        //console.log('item',item)
        if (err) {
            res.json({ success: false, message: 'Item Detail not found' });
        } else {
            item.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    table.findOne({_id:id}, function(err, table) {
                        console.log('Table',table)
                        if (err) {
                            res.json({ success: false, message: 'Table Detail not found' });
                        } else {
                            table.update({status:false }, function(err, success) {
                                console.log('Table status',success)
    
                                if (err) {
                                    res.json({ success: false, message: err });
                                } else {
                                   // res.json({ success: true, data: ItemDetail, message: 'New collection saved' });
                                   item.update({status:false }, function(err, success) {
                                    console.log('Table status',success)
        
                                    if (err) {
                                        res.json({ success: false, message: err });
                                    } else {
                                        res.json({ success: true, message: 'Item Detail update successfully' });
                                    }
                                });
                                }
                            });
                        }
                    })
                }
            });
        }
    })
});
//update the and apply for Payment Option update request
//update the and apply for Payment Option update request
//update the and apply update request
router.put('/item_Payment_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log('response',req.params)
        
    item_modal.findOne({Posid:id,status:false}, function(err, item) {
        //console.log('item',item)
        if (err) {
            res.json({ success: false, message: 'Item Detail not found' });
        } else {
            item.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    table.findOne({_id:id}, function(err, table) {
                        console.log('Table',table)
                        if (err) {
                            res.json({ success: false, message: 'Table Detail not found' });
                        } else {
                            table.update({status:true }, function(err, success) {
                                console.log('Table status',success)
    
                                if (err) {
                                    res.json({ success: false, message: err });
                                } else {
                                   // res.json({ success: true, data: ItemDetail, message: 'New collection saved' });
                                   item.update({status:true}, function(err, success) {
                                    console.log('Table status',success)
        
                                    if (err) {
                                        res.json({ success: false, message: err });
                                    } else {
                                        res.json({ success: true, message: 'Item Detail update successfully' });
                                    }
                                });
                                }
                            });
                        }
                    })
                }
            });
        }
    })
});

// it is used for get the customer detail
router.post('/item_get_Customer_value',(req,res,next) => {

    //console.log('before valu id',req.params.id)
    var customerName = req.body.customerName;
    var date = req.body.datemodel;
    
    item_modal.find({customerName:customerName,date:{$gte:new Date(req.params.datemodel)}},function(err,itemDetail){
        if(err){
           
            res.json( {success:false, message:'itemDetail single  Detail not found'}); 
        } else {
                res.json( {success:true, itemDetail,message:'itemDetail single datail found'});
                console.log(itemDetail)
        }
    })
})



// this is method apply for get the map value 
router.get('/Chart_Value', (req, res, next) => {
    item_modal.aggregate( {$unwind: "$products"}, {$unwind :"$products.productName"}, { $group :{ _id: "$products.productName", count: { $sum: 1 } }},{$sort:{'count':-1}},function(err,itemDetail) {
        res.json( {success:true, itemDetail,message:'itemDetail single datail found'});
    })

});

module.exports = router;




