var express = require('express');
var router = express.Router();
var user_modal = require('../Modal/user.model');
var bcrypt = require('bcryptjs');
var saltrounds = 10;
var path = require('path');
var jwt = require('jsonwebtoken');
var secret = "12345";
//get the User class value
router.get('/user_get_value', (req, res, next) => {
    user_modal.find(function(err, classmodel) {
        res.json(classmodel);
    })

});

// get the single value 
router.get('/user_get_single_value/:id',(req,res,next) => {
    console.log('before valu id',req.params.id)
    var id = req.params.id;
    user_modal.findOne(({_id: id}),function(err,userDetail){
        if(err){
            console.log('after value id',id);
            res.json( {success:false, message:'WareHouse single  Detail not found'}); 
        } else {
            res.json( {success:true, userDetail,message:'warehouse single datail found'}); 
            console.log( res.json);
        }
    })
})
//apply the post mehtod 
//save the class value
router.post('/user_post_value', (req, res, next) => {
    const newClass = user_modal({
        userName: req.body.userName,
        userFirstName: req.body.userFirstName,
        userLastName: req.body.userLastName,
        userRole: req.body.userRole,
        userEmail: req.body.userEmail,
        userpassword: req.body.userpassword,
        useractivityDate: req.body.useractivityDate
    })
    newClass.save(function(err, usertDetail) {
        if (err) {
            res.json({ success: false, message: err });
        } else {
            res.json({ success: true, data: usertDetail, message: 'New collection saved' });
        }
    })
});

router.post('/authenticate', function(req, res) {
    var id = req.body.id;
    /*  console.log(req.body);*/
   user_modal.findOne({ userName: req.body.userName }).select('userName  userpassword').exec(function(err, user) {
        if (err) throw err;
        console.log(req.body.userName);
        if (!user) {
            res.json({ success: false, message: 'Could not authenticate user' });
        } else
        if (user) {
            if (req.body.userpassword) {
                console.log(req.body.userpassword);
                var validPassword = user.comparePassword(req.body.userpassword);
            } else {
                res.json({ success: false, message: 'No password Provided' })
            }
            if (!validPassword) {
                res.json({ success: false, message: 'Could not authenticate password' });
            } else {
                var token = jwt.sign({ userName: user.userName, userEmail: user.userEmail }, secret, { expiresIn: '2m' });
                res.json({ success: true, message: 'user authenticated', user, token: token });
                //res.json({success: true, message: 'user authenticated'});
            }
        }
    });
});
// apply the delet mehtod
//delete the save value
router.delete('/user_delet/:id', (req, res, next) => {
    user_modal.remove({ _id: req.params.id }, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
            console
        }
    });
});
//update the and apply update request
router.put('/user_update/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id);
    user_modal.findById(id, function(err, registration) {
        if (err) {
            res.json({ success: false, message: 'User Detail not found' });
        } else {
            user_modal.update(req.body, function(err, success) {
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