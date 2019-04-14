const detail = require('./models/userdetailsModel'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codeblack', {
    useNewUrlParser: true
}, (db) => {
    console.log("Databse Started");
});

console.log(detail);

var need = {
    programmingLevel: 1,
    quizlevel: 1,
    like: 1,
    dislike: 1,
    // quotes
    name: "hai",
    comment: [{
        quote: "hello1"
    },
    {
        quote: "hello2"
    },
    {
        quote: "hello3"
    }],
    //discuss
    discuss:"ahi"
};

detail.create(need);