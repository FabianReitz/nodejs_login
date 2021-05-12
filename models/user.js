import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    favoriteAnimal: String,
});

const LoginInfo = mongoose.model('LoginInfo', userSchema, 'users');

export default LoginInfo;
