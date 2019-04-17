const express = require('express'),
    mongoose = require('mongoose'),
    authenticate = require('./config/authenticate'),
    middleware = require('./config/middleware'),
    dashBoardRouter = require('./router/dashBoardRouter'),
    homeRouter = require('./router/homeRouter'),
    quotesRouter = require('./router/quotesRouter'),
    profileRouter = require('./router/profileRouter'),
    discussRouter = require('./router/discussRouter'),
    userModel = require('./models/userModel'),
    discussSolutionRouter = require('./router/discussSolutionRouter'),
    quizRouter = require('./router/quizRouter'),
    codeRouter = require('./router/codeRouter'),
    levelModel = require('./models/levelModel'),
    quotesModel = require('./models/quotesModel'),
    hbs = require('hbs'),
    app = express();

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("Server Started in", process.env.NODE_ENV);
});

mongoose.connect('mongodb://root:root1234@ds239936.mlab.com:39936/codeblack', {
    useNewUrlParser: true
}).then((data) => {
    console.log("connection sucessfull");
}).catch((err) => {
    console.log("Connection failed");
});
// mongodb://root:root1234@ds239936.mlab.com:39936/codeblack
// mongodb://localhost:27017/codeblack
app.disable('etag');
middleware(app);
app.use(express.static('public'));
app.set('view engine', 'hbs');

// 
hbs.registerHelper('ifCond', (v1, options) => {
    if (v1 < 4) {
        return options.fn(this);
    }
    return options.inverse(this);
});
hbs.registerHelper('ifMark1', (v1, options) => {
    if (v1==1 || v1 == 2|| v1==3 || v1 == 4) {
        return options.fn(this);
    }
    return options.inverse(this);
});
hbs.registerHelper('ifMark2', (v1, options) => {
    if (v1==5 || v1 == 6 ||v1==8 || v1 == 7) {
        return options.fn(this);
    }
    return options.inverse(this);
});
hbs.registerHelper('ifMark3', (v1, options) => {
    if (v1==8 || v1==9 || v1==10) {
        return options.fn(this);
    }
    return options.inverse(this);
});
//   

app.get('/', (req, res) => {
    if (!req.user) {
        res.redirect('/login');
    } else {
        userModel.getDetails(req.user, (err, programmer) => {
            res.render('dashboard', { layout: 'dashpanel', programmer });
        });
    }
});

app.get('/register', (req, res) => {
    if (req.user) {
        res.redirect('/');
    } else {
        res.render('home');
    }
});

app.get('/login', (req, res) => {
    if (req.user) {
        res.redirect('/');
    } else {
        levelModel.getFirstRank((err, ranker) => {
            quotesModel.getTrendingQuotes((err,quotes)=>{
                console.log(ranker);
                res.render('home',{ranker,quotes});
            });
        });
    }
});

app.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
});

app.post('/login', authenticate.authenticate('local', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/');
});

app.post('/register', (req, res) => {
    console.log(req.body);
    userModel.findOne({ username: req.body.username }).then(data => {
        if (req.body.username === data.username) {
            levelModel.getFirstRank((err, ranker) => {
                console.log(ranker);
                res.render('home', { err: "not ok",ranker });
            });
            
        }
        else {
            console.log("enter");
            authenticate.addUser(req.body, (err, user) => {
                if (err) {
                    levelModel.getFirstRank((err, ranker) => {
                        console.log(ranker);
                        res.render('home', { err: "not ok",ranker });
                    });
                } else {
                    req.logIn(user, (err, done) => {
                        if (err) {
                            // res.render('home',{err:"end"});
                            throw err;
                        } else {
                            levelModel.getFirstRank((err, ranker) => {
                                console.log(ranker);
                                res.render('home', { message: "ok" });
                            });
                        }
                    });
                }
            });
        }
    }).catch(err => {
        authenticate.addUser(req.body, (err, user) => {
            if (err) {
                res.render('home', { err: "end" });
            } else {
                req.logIn(user, (err, done) => {
                    if (err) {
                        levelModel.getFirstRank((err, ranker) => {
                            console.log(ranker);
                            res.render('home', { err: "not ok",ranker });
                        });
                        throw err;
                    } else {
                        levelModel.getFirstRank((err, ranker) => {
                            console.log(ranker);
                            res.render('home', { message: "ok" });
                        });
                    }
                });
            }
        });
    });
});

function loginInCheck(req, res, next) {
    if (req.user) next();
    else res.render('home');
}
app.use('/homeRouter', homeRouter);
app.use(loginInCheck);
app.use('/dashBoardRouter', dashBoardRouter);
app.use('/quotesRouter', quotesRouter);
app.use('/profileRouter', profileRouter);
app.use('/discussRouter', discussRouter);
app.use('/discussSolutionRouter', discussSolutionRouter);
app.use('/quizRouter', quizRouter);
app.use('/codeRouter', codeRouter);


