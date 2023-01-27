const express = require('express');
const router = express.Router();

const Bluetooth_139 = require('../../Models/Bluetooth_139_Schema')


router.post('/', async (req, res) => {
    let data = await  new Bluetooth_139(req.body)
    let result = await data.save();
    // console.log(res.send(result))
    res.send(result)
 })

 module.exports = router;