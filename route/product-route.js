// it is a part of product.

var express = require('express');
var router = express.Router();
var product_modal = require('../Modal/product-model');
var json2csv = require('json2csv');
var fs = require('fs');

//get the User class value
router.get('/product_get_value', (req, res, next) => {
    product_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/people_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    product_modal.findOne(({_id: id}),function(err,ProductDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'ProductDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, ProductDetail,message:'ProductDetail single datail found'}); 
            console.log( res.json);
        }
    })
})




router.get("/pathToYourDownload", function (req, res) {
    product_modal.find(function(err, classmodel) {
        
        json2csv({ data: classmodel}, function(err, csv) {
            console.log( { data: classmodel})  
            if (err) console.log(err);
            fs.writeFile('file.csv', csv, function(err) { //currently saves file to app's root directory
            if (err) throw err;
            console.log('file saved');
          });
            res.setHeader('Content-disposition', 'attachment; filename=data.csv');
            res.set('Content-Type', 'text/csv');
            res.status(200).send(csv);
          });
        
    })

    
  });

//apply the post mehtod 
//save the class value
router.post('/product_post_value', (req, res, next) => {
    const newClass = product_modal({
        productType: req.body.productType,
        productCode: req.body.productCode,
        productName: req.body.productName,
        productCategory: req.body.productCategory,
        productSupplier: req.body.productSupplier,
        productPurchasePrice: req.body.productPurchasePrice,
        productTax: req.body.productTax,
        productTaxMethod: req.body.productTaxMethod,
        productPriceINR: req.body.productPriceINR,
        productUnit: req.body.productUnit,
        productAlertQuantity: req.body.productAlertQuantity,
        productDiscription: req.body.productDiscription,
        productImage: req.body.productImage,
        productParagraph: req.body.productParagraph,

    })
    newClass.save(function(err, usertDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: usertDetail, message: 'New collection saved' });
        }
    })
});

//delete value
router.delete('/product_delet/:id', (req, res, next) => {
    product_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});

//update the and apply update request
router.put('/product_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
     product_modal.findById(id, function(err, product) {
        if (err) {
            res.json({ success: false, message: 'product Detail not found' });
        } else {
            product.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'product Detail update successfully' });
                }
            });
        }
    })
});
module.exports = router;