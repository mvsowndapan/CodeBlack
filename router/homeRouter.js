const express = require('express'),
      homeRouter = express.Router();

homeRouter.get('/about',(req,res)=>{
   res.render('about');
}); 

module.exports = homeRouter;