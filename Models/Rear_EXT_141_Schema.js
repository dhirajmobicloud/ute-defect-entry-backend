const mongoose = require('mongoose')

const Rear_EXT_141_Schema = new mongoose.Schema({
        Digit_13: String,
        Surface_RH_139 : String,
        AA : String,
        BB : String,
        CC : String,
        Componente : String,
        Difetti: String,
        Posizioni:String,
        DD:String,
        Descrizione:String,
        EOL_Station:String,
        LOC:String,
        Station_No:String,
        Check_point:String,
        Barcode:String,
        Segement: String,
        new : Boolean
})

module.exports = mongoose.model('Rear_EXT_141', Rear_EXT_141_Schema);