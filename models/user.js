import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const LoginInfo = mongoose.model('LoginInfo', userSchema);

export default LoginInfo;
