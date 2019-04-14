const mongoose = require('mongoose');

const levelSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    quizTest:[{
            quizno:{
                type:Number
            },
            status:{
                type:String
            },
            points:{
                type:Number
            },
            time:{
                type:Date,
                default:Date.now
            }
    }],
    programmingTrack:[{
            week:{
                type:Number
            },
            status:{
                type:String
            },
            points:{
                type:Number
            },
            time:{
                type:Date,
                default:Date.now
            }
    }],
    level:{
        type:Number,
        default:1
    },
    globelPoints:{
        type:Number,
        default:0
    },
    quizPoints:{
        type: Number,
        default: 1
    },
    programPoints:{
        type: Number,
        default: 0
    },
    quotesPoints:{
        type:Number,
        default: 0
    },
    likes:{
        type: Number,
        default:0
    },
    dislikes:{
        type: Number,
        default:0
    }
});

const levelModel = mongoose.model('levelData',levelSchema);
 
levelModel.addQuizDetail = (newquiz,result) => {
    levelModel.create(newquiz,(err,quiz) => result(err,quiz));
}
module.exports = levelModel;