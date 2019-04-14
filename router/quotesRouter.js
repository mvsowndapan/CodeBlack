const express = require('express'),
  quotesModel = require('../models/quotesModel'),
  levelModel = require('../models/levelModel'),
  userModel = require('../models/userModel'),
  quotesRouter = express.Router();

quotesRouter.post('/addQuote', (req, res) => {
  var newQuote = {
    email: req.body.email,
    quote: req.body.quote
  };
  quotesModel.create(newQuote);
  userModel.getDetails(req.user, (err, programmer) => {
    quotesModel.getQuotes(req.user, (err, quotes) => {
      quotesModel.getTrendingQuotes((err, trendingQuotes) => {
        quotesModel.getAllQuote((err, allQuotes) => {
          res.render('quotes', { layout: 'dashpanel',message:"hai", programmer, quotes, trendingQuotes, allQuotes });
        });
      });
    });
  });
});

quotesRouter.post('/likes/:id', (req, res) => {
  quotesModel.findById({ _id: req.params.id }).then(data => {
    data.likes++;
    data.save();
  });
  levelModel.findOne({ username: req.body.email }).then(data => {
    console.log(data);
    data.quotesPoints += 10;
    data.globelPoints += 10;
    data.likes++;
    data.save();
  });
  userModel.getDetails(req.user, (err, programmer) => {
    quotesModel.getQuotes(req.user, (err, quotes) => {
      quotesModel.getTrendingQuotes((err, trendingQuotes) => {
        quotesModel.getAllQuote((err, allQuotes) => {
          res.render('quotes', { layout: 'dashpanel', programmer, quotes, trendingQuotes, allQuotes });
        });
      });
    });
  });
});
quotesRouter.post('/dislikes/:id', (req, res) => {
  quotesModel.findById({ _id: req.params.id }).then(data => {
    data.dislikes++;
    data.save();
  });
  levelModel.findOne({ username: req.body.email }).then(data => {
    console.log(data);
    data.quotesPoints -= 1;
    data.globelPoints -= 1;
    data.dislikes++;
    data.save();
  });
  userModel.getDetails(req.user, (err, programmer) => {
    quotesModel.getQuotes(req.user, (err, quotes) => {
      quotesModel.getTrendingQuotes((err, trendingQuotes) => {
        quotesModel.getAllQuote((err, allQuotes) => {
          res.render('quotes', { layout: 'dashpanel', programmer, quotes, trendingQuotes, allQuotes });
        });
      });
    });
  });
});
module.exports = quotesRouter; 