const mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
    email:{
       type:String,
       required:true
    },
    quote:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    },
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
        type:Number,
        default:0
    }
});

const quotesModel = mongoose.model('User Quotes',quotesSchema);

quotesModel.getQuotes = (User,result)=>{
    quotesModel.aggregate([{ $match:{  email:User.username} }, { $sort:{  time:-1,} }],(err,data)=>{
         result(null,data);
    })
};
quotesModel.getTrendingQuotes = (result)=>{
    quotesModel.aggregate([{$sort:{likes:-1}},{$limit:10}],(err,data)=>{
         result(null,data);
    })
};
quotesModel.getAllQuote = (result)=>{
    quotesModel.aggregate([{ $sort:{ time:-1,} }],(err,data)=>{
         result(null,data);
    })
};
module.exports = quotesModel;

