const express = require('express'),
    levelModel = require('../models/levelModel'),
    gameModel = require('../models/gameModel'),
    userModel = require('../models/userModel'),
    exec = require('child_process').exec,
    fs = require('fs');
codeRouter = express.Router();

codeRouter.post('/program', (req, res) => {
    var code = req.body.code;
    var user = req.body.name;
    var pno = req.body.pno;
    exec("touch " + user + "o.txt", (err, create) => {
        console.log("successfully created outputfile");
    })
    fs.writeFile(user + "i.c", code, (err, input) => {
        if (err) throw err;
        console.log("successfully written inputfile");
    });
    var o = [];
    exec("gcc " + user + "i.c", (err, stdout) => {
        console.log("compiled");
        exec("./a.out < p-" + pno + "-1.txt > " + user + "o.txt", (err, run1) => {
            fs.readFile(user + 'o.txt', (err, read1) => {
                o.push(read1.toString());
                console.log("compiled");
                exec("./a.out < p-" + pno + "-2.txt > " + user + "o.txt", (err, run1) => {
                    fs.readFile(user + 'o.txt', (err, read2) => {
                        o.push(read2.toString());
                        exec("./a.out < p-" + pno + "-3.txt > " + user + "o.txt", (err, run1) => {
                            fs.readFile(user + 'o.txt', (err, read3) => {
                                o.push(read3.toString());
                                fs.unlink(user + 'i.c', (err, data) => {
                                    fs.unlink(user + 'o.txt', (err, data) => {
                                        console.log("deleted");
                                        res.json(o);
                                    })
                                })
                            });
                        });
                    });
                });
            });
        });
    });
});

codeRouter.post('/submit', (req, res) => {
    console.log(req.body.mark);
    levelModel.findOne({ username: req.body.email }).then(data => {
        console.log(data.programPoints);
        data.programPoints += req.body.mark;
        data.globelPoints += req.body.mark;
        data.save();
        res.json({ result: "updated" });
    });
});

codeRouter.post('/end', (req, res) => {
    console.log(req.body);
    levelModel.findOne({ username: req.body.email }).then(data => {
        var newMark = {
            problem1: req.body.pm1,
            problem2: req.body.pm2,
            problem3: req.body.pm3,
            problem4: req.body.pm4,
            problem5: req.body.pm5,
            points: req.body.t1
        };
        data.programmingTrack.push(newMark);
        data.save();
        userModel.getDetails(req.user, (err, programmer) => {
            res.render('program', { layout: 'dashpanel', programmer });
        });
    });
});

codeRouter.post('/game', (req, res) => {
    console.log(req.body);
    var h = {
        email: req.body.username,
        link: req.body.link
    };
    gameModel.create(h);
    userModel.getDetails(req.user, (err, programmer) => {
        res.render('program', { layout: 'dashpanel', programmer });
    });
});
module.exports = codeRouter;

