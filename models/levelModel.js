const mongoose = require('mongoose');

const levelSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    quizTest: [{
        quizno: {
            type: Number
        },
        status: {
            type: String
        },
        points: {
            type: Number,
            default: 0
        },
        time: {
            type: Date,
            default: Date.now
        }
    }],
    programmingTrack: [{
        problem1: {
            type: Number,
            default: 0
        },
        problem2: {
            type: Number,
            default: 0
        },
        problem3: {
            type: Number,
            default: 0
        },
        problem4: {
            type: Number,
            default: 0
        },
        problem5: {
            type: Number,
            default: 0
        },
        points: {
            type: Number,
            default: 0
        },
        time: {
            type: Date,
            default: Date.now
        }
    }],
    level: {
        type: Number,
        default: 1
    },
    globelPoints: {
        type: Number,
        default: 0
    },
    quizPoints: {
        type: Number,
        default: 0
    },
    programPoints: {
        type: Number,
        default: 0
    },
    quotesPoints: {
        type: Number,
        default: 0
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

const levelModel = mongoose.model('levelData', levelSchema);

levelModel.addQuizDetail = (newquiz, result) => {
    levelModel.create(newquiz, (err, quiz) => result(err, quiz));
}
levelModel.getFirstRank = (result) => {
    levelModel.aggregate([{ $sort: { globelPoints: -1 } }, { $limit: 10 }], (err, data) => {
        result(null, data);
    });
};

module.exports = levelModel;