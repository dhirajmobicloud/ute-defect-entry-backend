const mongoose = require('mongoose')

const Surface_RH_139_Schema = new mongoose.Schema(
    {
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
        Barcode:String

    }
)

module.exports = mongoose.model('Surface_RH_139', Surface_RH_139_Schema);