import mongoose from 'mongoose';
import Model from './models/user.js';

const CONNECTION_URL = `mongodb://localhost:27017/database`;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
    console.log('Successfully connected to database!');
});

const testUser1 = new Model({
    username: 'testUser1',
    password: '1234',
    favoriteAnimal: 'Wombat',
});

const testUser2 = new Model({
    username: 'testUser2',
    password: '1234',
    favoriteAnimal: 'Dog',
});

testUser1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log('User has been created!');
    process.exit();
});

testUser2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log('User has been created!');
    process.exit();
});
