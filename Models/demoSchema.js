const mongoose = require('mongoose')

const demoSchema = new mongoose.Schema({
    username : String,
    segement_assigned : [],
    work:[]
},
{
    timestamps: true
});

module.exports = mongoose.model('segement_asigned', demoSchema);