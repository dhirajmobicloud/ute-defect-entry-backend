const mongoose = require('mongoose')

const Vehicle_Schema = new mongoose.Schema({
    vin : String,
    model : String,
    date : Date,
    defect : [],
    repaired : []
},
{
    timestamps: true
});

module.exports = mongoose.model('vehicles', Vehicle_Schema);