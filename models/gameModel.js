const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  email:{
       type:String,
       required:true
  },
  link:{
      type:String,
      required:true
  },
  time:{
      type:Date,
      default:Date.now
  }
});

const gameModel = mongoose.model('game',gameSchema);

module.exports = gameModel;