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

const testUser = new Model({
    username: 'testUser',
    password: '1234',
    favoriteAnimal: 'Wombat',
});

testUser.save(function (err, doc) {
    if (err) return console.error(err);
    console.log('User has been created!');
    process.exit();
});
