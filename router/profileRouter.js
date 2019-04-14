const express = require('express'),
    userModel = require('../models/userModel'),
    accountModel = require('../models/accountModel'),
    profileRouter = express.Router();

profileRouter.post('/update', (req, res) => {
    userModel.findOne({ username: req.body.oldemail }).then(data => {
        accountModel.findOne({_id:data.account._id}).then(newData=>{
            console.log(newData);
            newData.name = req.body.name;
            newData.age = req.body.age;
            newData.save();
        });
        data.username = req.body.email;
        data.password = req.body.password;
        data.save();
        userModel.findById({_id:data._id}).populate('account').then(programmer => {
            res.render('profile', { layout: 'dashpanel',message:"Updated Successfully",programmer });
        });
    })
});

module.exports = profileRouter;