var express = require('express');
var router = express.Router();
var POS_model = require('../Modal/pos.add.model');

//get the User class value
router.get('/POS_get_value', (req, res, next) => {
    POS_model.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/POS_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    POS_model.findOne(({_id: id}),function(err,POS){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'POS single  Detail not found'}); 
        } else {
            res.json( {success:true, POS,message:'POS single datail found'}); 
            console.log( res.json);
        }
    })
})
// apply for post method
router.post('/POS_post_value', (req, res, next) => {
    const newClass = POS_model({
        PosId  : req.body.PosId,
        customerName:req.body.customerName,
        customerPhone: req.body.customerPhone,
        customerState: req.body.customerState,
        POSwaiterName: req.body.POSwaiterName,
        POSquanity: req.body.POSquanity,
        date:req.body.date,
        POStotalPrize: req.body.POStotalPrize,
        checknumber: req.body.checknumber,
        creditcardnumber :req.body.creditcardnumber,
        creditcardholder: req.body.creditcardholder,

    })
    newClass.save(function(err, POS) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: POS, message: 'New collection saved' });
            console.log('pos' ,POS);
        }
    })
});

// apply the delet mehtod
//delete the save value
router.delete('/POS_delet/:id', (req, res, next) => {
    POS_model.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});

// delete the all the value within a sam time
router.delete('/POS_all_delet/:id', (req, res, next) => {
    POS_model.remove({ POSid: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});

//update the and apply update request
router.put('/POS_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    POS_model.findById(id, function(err, POS) {
        if (err) {
            res.json({ success: false, message: 'POS Detail not found' });
        } else {
            POS.update(req.body, function(err, success) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'POS update successfully' });
                }
            });
        }
    })
});
module.exports = router;