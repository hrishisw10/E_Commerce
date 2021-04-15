const mongoose = require('mongoose');
const Schema = mongoose.Schema

const userSchema = new Schema({
    customerId: Number,
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    password2:{
        type: String,
        required: true
    },
    name : String,
    phoneNo : Number,
    address: String

});

const User = mongoose.model('Users', userSchema);
module.exports = User;