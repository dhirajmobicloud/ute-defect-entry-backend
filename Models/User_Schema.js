const mongoose = require('mongoose')

const User_Schema = new mongoose.Schema({
    username : String,
    password : String
},
{
    timestamps: true
});

module.exports = mongoose.model('users', User_Schema);