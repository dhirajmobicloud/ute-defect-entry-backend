const mongoose = require('mongoose')

const Electrical_2_142_Schema = new mongoose.Schema({
        Digit_13: String,
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

module.exports = mongoose.model('Electrical_2_142', Electrical_2_142_Schema);