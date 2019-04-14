const express = require('express'),
  userModel = require('../models/userModel'),
  quotesModel = require('../models/quotesModel'),
  discussSolutionModel = require('../models/discussSolutionModel'),
  discussfriendsModel = require('../models/discussfriendsModel'),
  levelModel = require('../models/levelModel'),
  dashBoardRouter = express.Router();

//dashboard -

// quotes
dashBoardRouter.get('/quotes', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    quotesModel.getQuotes(req.user, (err, quotes) => {
      quotesModel.getTrendingQuotes((err, trendingQuotes) => {
        quotesModel.getAllQuote((err,allQuotes) => {
          res.render('quotes', { layout: 'dashpanel', programmer, quotes, trendingQuotes, allQuotes });
        });
      });
    });
  });
});

// dailychallenge
dashBoardRouter.get('/dailychallenge', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    res.render('dailychallenge', { layout: 'dashpanel', programmer });
  });
});
// discussfriends
dashBoardRouter.get('/discussfriends', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    discussfriendsModel.getEveryProblem((err, problemData) => {
      discussSolutionModel.getSolution(req.user, (err, solutionData) => {
        res.render('discussfriends', { layout: 'dashpanel', programmer, problemData, solutionData });
      });
    });
  });
});

// profile
dashBoardRouter.get('/profile', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    res.render('profile', { layout: 'dashpanel', programmer });
  });
});

// program
dashBoardRouter.get('/program', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    res.render('program', { layout: 'dashpanel', programmer });
  });
});

// quiz
dashBoardRouter.get('/quiz', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    levelModel.findOne({ username: req.user.username }).then(data => {
      res.render('quiz', { layout: 'dashpanel', programmer, data });
    })
  });
});

// dailycode
dashBoardRouter.get('/dailyCode', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    res.render('dailyCode', { programmer });
  });
});

// program code
dashBoardRouter.get('/code', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    res.render('code', { programmer });
  });
});

dashBoardRouter.get('/quizQuestion', (req, res) => {
  userModel.getDetails(req.user, (err, programmer) => {
    levelModel.findOne({ username: req.user.username }).then(data => {
      res.render('quizQuestion', { programmer, data });
    })
  });
});

module.exports = dashBoardRouter;