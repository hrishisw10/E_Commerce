const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    customerId: Number,
    loginId: {
        type: String,
        required: true,
        trim: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    },
    name : String,
    phoneNo : Number,
    address: String

});

const User = mongoose.model('User', userSchema);
module.exports = User;