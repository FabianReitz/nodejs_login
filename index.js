import express, { response } from 'express';
import session from 'express-session';
import path from 'path';
import mongoose from 'mongoose';
import Model from './models/user.js'

const __dirname = path.resolve(path.dirname('')); 

const CONNECTION_URL = `mongodb://localhost:27017/database`;
const PORT = 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));

db.once('open', function () {
    console.log('Successfully connected to database!');
});


const app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const query = { username: username, password: password };

    if (username && password) {
        db.collection('users').findOne(query, function (err, user) {
            if (err) console.error(err);
            if (user) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/home');
                console.log(`New login by: ${username}`);
            } else {
                res.send('Incorrect Username and/or Password!');
            }
            res.end();
        });
    } else {
        res.send('Please enter Username and Password!');
        res.end();
    }
});

app.get('/home', function (req, res) {
    if (req.session.loggedin) {
        res.send('Welcome back, ' + req.session.username + '!');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();
});

app.listen(PORT);