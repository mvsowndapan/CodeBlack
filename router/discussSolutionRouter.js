const express = require('express'),
  discussSolutionModel = require('../models/discussSolutionModel'),
  userModel = require('../models/userModel'),
  discussfriendsModel = require('../models/discussfriendsModel'),
  discussSolutionRouter = express.Router();

discussSolutionRouter.post('/addSolution', (req, res) => {
  var newSolution = {
    email: req.body.email,
    title: req.body.title,
    problem: req.body.problem,
    solution: req.body.solution
  };
  discussSolutionModel.create(newSolution);
  userModel.getDetails(req.user, (err, programmer) => {
    discussfriendsModel.getEveryProblem((err, problemData) => {
      discussSolutionModel.getSolution(req.user,(err,solutionData)=>{
        res.render('discussfriends', { layout: 'dashpanel',message:"",programmer,problemData,solutionData});
      });
    });
  });
});

module.exports = discussSolutionRouter;