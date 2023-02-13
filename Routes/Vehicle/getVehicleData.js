const express = require('express');
const router = express.Router();

const Vehicle = require('../../Models/Vehicle_Schema')

router.get('/', async(req, res)=>{
    let win_number = req.params.win_number
    let data = await Vehicle.findOne({win_number : req.params.win_number});
    res.send(data)
})


module.exports = router;