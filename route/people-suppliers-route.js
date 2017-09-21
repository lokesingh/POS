// it is a part of people suppliers.

var express = require('express');
var router = express.Router();
var people_suppliers_modal = require('../Modal/people-supplier-model');

//get the User class value
router.get('/people_suppliers_get_value', (req, res, next) => {
    people_suppliers_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/people_suppliers_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    people_suppliers_modal.findOne(({_id: id}),function(err,SuppliersDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'SuppliersDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, SuppliersDetail,message:'SuppliersDetail single datail found'}); 
            console.log( res.json);
        }
    })
})

//apply the post mehtod 
//save the class value
router.post('/people_suppliers_post_value', (req, res, next) => {
    const newClass = people_suppliers_modal({
        suppliersName: req.body.suppliersName,
        suppliersPhone: req.body.suppliersPhone,
        suppliersEmail: req.body.suppliersEmail,
        supplierDate: req.body.supplierDate,
        suppliersStore: req.body.suppliersStore,

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
router.delete('/people_suppliers_delet/:id', (req, res, next) => {
    people_suppliers_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
router.put('/people_suppliers_update/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    people_suppliers_modal.findOne(({_id: id}), function(err, collection) {
        if (err) {
            res.json({ success: false, message: 'People Supplier not found' });
        } else {
            collection.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, data: 'People Supplier update successfully' });
                }
            });
        }
    })
});


module.exports = router;