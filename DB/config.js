const mongoose = require('mongoose')

const Connect = () => {
    // return mongoose.connect('mongodb+srv://dhirajmobicloud:Mobi%40123@cluster0.u1kcqe0.mongodb.net/messes');
    return mongoose.connect('mongodb+srv://dhirajmobicloud:Mobi%40123@dhirajcloud.jonzort.mongodb.net/test')
    // return mongoose.connect('mongodb://127.0.0.1:27017/')
}

module.exports = Connect;