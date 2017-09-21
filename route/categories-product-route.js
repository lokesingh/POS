var express = require('express');
var router = express.Router();
var catego_produc_modal = require('../Modal/categories-product-model');

//get the User class value
router.get('/cate_product_get_value', (req, res, next) => {
    catego_produc_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/cate_product_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    catego_produc_modal.findOne(({_id: id}),function(err,CategoryProductDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'CategoryProductDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, CategoryProductDetail,message:'CategoryProductDetail single datail found'}); 
            console.log( res.json);
        }
    })
})

// get the single value 
router.get('/cate_product_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    catego_produc_modal.findOne(({_id: id}),function(err,userDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'Category Product single  Detail not found'}); 
        } else {
            res.json( {success:true, userDetail,message:'Category Product single datail found'}); 
            console.log( res.json);
        }
    })
})

//apply the post mehtod 
//save the class value
router.post('/catego_produc_post_value', (req, res, next) => {
    const newClass = catego_produc_modal({
          categoryproductName: req.body.categoryproductName,
          categoCreateAt: req.body.categoCreateAt,

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
router.delete('/catego_produc_delet/:id', (req, res, next) => {
    catego_produc_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
//update the and apply update request
router.put('/catego_produc_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    catego_produc_modal.findById(id, function(err, cate_pro) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            cate_pro.update(req.body, function(err, success) {
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