const mongoose = require('mongoose')

const Bluetooth_139_Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Bluetooth_139', Bluetooth_139_Schema);