const express = require('express'),
    discussfriendsModel = require('../models/discussfriendsModel'),
    userModel = require('../models/userModel'),
    discussfriendsRouter = express.Router();

discussfriendsRouter.post('/addProblem', (req, res) => {
    var newProblem = {
        email: req.body.email,
        title: req.body.title,
        problem: req.body.problem
    };
    discussfriendsModel.create(newProblem);
    userModel.getDetails(req.user, (err, programmer) => {
        discussfriendsModel.getEveryProblem((err, problemData) => {
            res.render('discussfriends', { layout: 'dashpanel',message:"success",programmer,problemData});
        });
    });
});

module.exports = discussfriendsRouter;