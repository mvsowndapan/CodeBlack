const mongoose = require('mongoose');

const discussSolutionSchema = mongoose.Schema({
  email:{
      type:String,
      required:true
  },
  title:{
      type:String,
      required:true
  },
  problem:{
      type:String,
      required:true
  },
  solution:{
      type:String,
      required:true
  },
  time:{
      type:Date,
      default:Date.now
  }
}); 

const discussSolutionModel = mongoose.model('discussSolution',discussSolutionSchema);

discussSolutionModel.getSolution = (user,result) =>{
    console.log(user);
    discussSolutionModel.aggregate([{$match:{email:user.username}},{$sort:{time:-1}},{$limit:20}],(err,data)=>{
        result(null,data);
    });
} 
module.exports = discussSolutionModel;