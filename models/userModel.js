const mongoose = require('mongoose'),
    accountModel = require('./accountModel'),
    levelModel = require('../models/levelModel');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    account: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'levelData',
        required: true
    }
});

const userModel = mongoose.model('User', userSchema);

userModel.addUser = (newUser, result) => {
    accountModel.addAccount(newUser, (err, account) => {
        if (err) {
            result('Account acould not be created', null);
            throw err;
        }
        newUser.account = account;
        levelModel.addQuizDetail(newUser, (err, quiz) => {
            if (err) {
                result('quiz acould not be created', null);
                throw err;
            }
            newUser.quiz = quiz;
            userModel.create(newUser, (err, user) => {
                if (err) {
                    result('User could not be created', null);
                    throw err;
                }
                result(null, user);
            });
        });
    });
}

userModel.getDetails = (user, result) => {
    userModel.findById({ _id: user._id }).populate('account').populate('quiz').then(account => {
        result(null, account);
    });
}

//userModel.getUser - (user)

module.exports = userModel;