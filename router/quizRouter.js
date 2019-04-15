const express = require('express'),
    levelModel = require('../models/levelModel'),
    userModel = require('../models/userModel'),
    quizRouter = express.Router();

quizRouter.post('/mark', (req, res) => {
    levelModel.findOne({ username: req.body.username }).then(data => {
        var h = {
            quizno: req.body.quizno,
            status: req.body.status,
            points: req.body.mark,
        };
        console.log(req.body);
        data.quizTest.push(h);
        data.quizPoints= parseInt(data.quizPoints) + parseInt(req.body.mark);
        data.globelPoints += parseInt(req.body.mark);
        data.level = data.level + 1;
        data.save();
        userModel.getDetails(req.user, (err, programmer) => {
            levelModel.findOne({username:req.user.username}).then(data =>{
              res.render('quiz',{layout: 'dashpanel',programmer,data});
             })
          });
    });
});

module.exports = quizRouter;