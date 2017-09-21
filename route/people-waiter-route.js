// it is part of the people option ////


var express = require('express');
var router = express.Router();
var people_waiter_modal = require('../Modal/people-waiters-model');

//get the User class value
router.get('/people_waiter_get_value', (req, res, next) => {
    people_waiter_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/people_waiter_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    people_waiter_modal.findOne(({_id: id}),function(err,WaitersDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'WaitersDetail single  Detail not found'}); 
        } else {
            res.json( {success:true, WaitersDetail,message:'WaitersDetail single datail found'}); 
            console.log( res.json);
        }
    })
})

//apply the post mehtod 
//save the class value
router.post('/people_waiter_post_value', (req, res, next) => {
    const newClass = people_waiter_modal({
        waiterName: req.body.waiterName,
        waiterPhone: req.body.waiterPhone,
        waiterEmail: req.body.waiterEmail,
        waiterStore: req.body.waiterStore,
         waiterCreateAt: req.body.waiterCreateAt

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
router.delete('/people_waiter_delet/:id', (req, res, next) => {
    people_waiter_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
//update the and apply update request
router.put('/people_waiter_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    people_waiter_modal.findById(id, function(err, PeopleWaiters) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            PeopleWaiters.update(req.body, function(err, success) {
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