const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle_Schema')

router.get('/', async(req, res)=>{
    let data = await Vehicle.find();
    res.send(data)
})


module.exports = router;