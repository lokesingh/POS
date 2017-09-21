// it is a part of setting.

var express = require('express');
var router = express.Router();
var setting_modal = require('../Modal/setting-model');


//get the User class value
router.get('/setting_get_value', (req, res, next) => {
    setting_modal.find(function(err, Setting) {
        res.json( {success:true,Setting,message:'SettingDemo single datail found'});
    })
});

// get the single value 
router.get('/setting__get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    setting_modal.findOne(({_id: id}),function(err,SettingDemo){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'SettingDemo single  Detail not found'}); 
        } else {
            res.json( {success:true,SettingDemo,message:'SettingDemo single datail found'}); 
            console.log( res.json);
        }
    })
})
router.post('/setting_post_value', (req, res, next) => {
    const newClass = setting_modal({
        companyName: req.body.companyName,
        companyLogo: req.body.companyLogo,
        companyPhone: req.body.companyPhone,
        companyCode: req.body.companyCode,
        companyDiscount: req.body.companyDiscount,
        CGST:req.body.CGST,
        SGST:req.body.SGST,
        IGST:req.body.IGST,
        companyTimer:req.body.companyTimer,
        companyNumberDecimal: req.body.companyNumberDecimal,
        companyHeaderParagraph: req.body.companyHeaderParagraph,
        companyFooterParagraph: req.body.companyFooterParagraph,
        compnayStripeSecretkey: req.body.compnayStripeSecretkey,
        compnayStripePublishedKey: req.body.compnayStripePublishedKey
    })
    newClass.save(function(err, setting) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: setting, message: 'New collection saved' });
        }
    })
});
router.delete('/setting_delet/:id', (req, res, next) => {
    setting_modal.remove({ _id: req.params.id }, function(err, result) {
         if (err) {
             res.json(err);
         } else {
             res.json(result);
             console
         }
     });
 });

module.exports = router;