var express = require('express');
var router = express.Router();
var sales_modal = require('../Modal/Sales.model');

//get the  sales value
router.get('/sales_get_value', (req, res, next) => {
    sales_modal.find(function(err,salesmodel) {
        res.json(salesmodel);
    })

});

// apply for post method
router.post('/sales_post_value', (req, res, next) => {
    const newClass = sales_modal({
          salesNumber: { type: String },
          salesTax: { type: String },
          salesDiscount: { type: String },
          salesTotal: { type: String },
          salesCreatedBy: { type: String },
          salesTotalItem: { type: String },
         salesStatus: { type: String },
        salesDate: new Date
    })
    newClass.save(function(err, setting) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: setting, message: 'New collection saved' });
        }
    })
});

// apply the delet method
//delete the save value
router.delete('/sales_delet/:id', (req, res, next) => {
    sales_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            consol
        }
    });
});

//update the and apply update request
router.put('/sales_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    sales_modal.findById(id, function(err, registration) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
           sales_modal.update(req.body, function(err, success) {
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