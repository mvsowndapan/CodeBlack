const mongoose = require('mongoose');

const subscribeSchema = mongoose.Schema({
    email: {
        type: String
    },
    time: {
        type: Date,
        default:Date.now
    }
});

const subscribeModel = mongoose.model('subscribe',subscribeSchema);
module.exports = subscribeModel;