const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle_Schema')


router.post('/', async(req, res)=>{
    console.log(req.body)
    let vin = req.body.vin
    let data = await Vehicle.findOne({vin:vin})
    if(data){
        res.send(data)
    }else{
        let newVehicle = new Vehicle(req.body)
        let result = await newVehicle.save();
    res.send(result)
    }
    
})



module.exports = router;